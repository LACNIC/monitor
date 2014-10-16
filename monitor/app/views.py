from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

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
        post = request.POST
        med = Medicion(post.lat, post.lat_err, post.bw, post.bw_err)
        med.save()
        return HttpResponse("Hola")