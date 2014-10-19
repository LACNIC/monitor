from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import numpy as np

from models import *


def home(request):
    return render(request, 'app/home.html', {})


@csrf_exempt
def post(request):
    if request.method != 'POST':
        text = "Bad Request"
        print text
        return HttpResponse(text)
    else:
        http_post = request.POST
        lat = float(http_post.get('lat'))
        lat_err = float(http_post.get('lat_err'))
        bw = float(http_post.get('bw'))
        bw_err = float(http_post.get('bw_err'))

        med = Medicion(lat=lat, lat_err=lat_err, bw=bw, bw_err=bw_err)
        med.save()
        return HttpResponse("OK")


def stats(request):
    lat = Medicion.objects.filter(lat__lte=900, bw__lte=20000000)[:100]
    return render(request, 'app/stats.html', {'data': lat,
                                              'lat': list(lat.values_list('lat', flat=True)),
                                              'bw': list(lat.values_list('bw', flat=True))
    })


def stats2(request):
    lat = Medicion.objects.filter(lat__lte=900, bw__lte=20000000)[:1000]
    # latency
    lat_flat = list(lat.values_list('lat', flat=True))
    hist_lat, bin_edges = np.histogram(lat_flat, bins=10, normed=True)
    hist_lat = hist_lat.tolist()
    bin_edges = bin_edges.tolist()
    # preparar los bins para poder imprimirlos
    bins_lat = []
    previous = -1
    for edge in bin_edges:
        if previous == -1:
            previous = edge
            continue
        bins_lat.append((previous + edge) / 2)

    # bandwidth
    bw_flat = list(lat.values_list('bw', flat=True))
    hist_bw, bin_edges = np.histogram(bw_flat, bins=10, normed=True)
    hist_bw = hist_bw.tolist()
    bin_edges = bin_edges.tolist()
    # preparar los bins para poder imprimirlos
    bins_bw = []
    previous = -1
    for edge in bin_edges:
        if previous == -1:
            previous = edge
            continue
        bins_bw.append((previous + edge) / 2)

    return render(request, 'app/stats2.html', {'data': lat,
                                               'lat': lat_flat,
                                               'bw': list(lat.values_list('bw', flat=True)),
                                               'hist_lat': hist_lat,
                                               'bins_lat': bins_lat,
                                               'hist_bw': hist_bw,
                                               'bins_bw': bins_bw
    })