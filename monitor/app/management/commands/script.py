from mailbox import mbox

__author__ = 'agustin'

import matplotlib.pyplot as pyplot
import user_agents as ua

from django.core.management.base import BaseCommand

from app.models import Medicion


class Command(BaseCommand):
    def handle(self, *args, **options):
        from numpy import nanmean as mean
        from numpy import nanstd as std
        import datetime

        mbps = 1000000
        mobile = Medicion.objects.mobile()
        desktop = Medicion.objects.desktop()

        total = len(mobile) + len(desktop)
        if total <= 0:
            return

        # devices
        devs = dict()
        for d in desktop:
            dev = d.browser_family()  # ua.parse(d.user_agent).browser.family
            try:
                devs[dev] += 1
            except KeyError:
                devs[dev] = 1

        mobile_bw = [m.bw for m in mobile]
        desktop_bw = [m.bw for m in desktop]
        mobile_lat = [m.lat for m in mobile]
        desktop_lat = [m.lat for m in desktop]
        dns = [m.nt_dns_end - m.nt_dns_st for m in Medicion.objects.dns()]
        n_bw_mobile = len(mobile_bw)
        n_bw_desktop = len(desktop_bw)
        n_bw = n_bw_mobile + n_bw_desktop
        n_lat_mobile = len(mobile_lat)
        n_lat_desktop = len(desktop_lat)
        n_dns = len(dns)
        n_lat = n_bw_mobile + n_lat_desktop

        pyplot.subplot(3, 1, 1)
        pyplot.title("Throughput")
        pyplot.xlabel("Throughput (mbps)")
        pyplot.hist(mobile_bw, alpha=0.5, normed=True, label="Mobile: %s samples (%.1f%c)\nMean: %.1f mbps\nStd. Dev.: %.1f mbps" % (n_bw_mobile, 100.0 * n_bw_mobile / n_bw, "%", mean(mobile_bw) / mbps, std(mobile_bw) / mbps))
        pyplot.hist(desktop_bw, alpha=0.5, normed=True, label="Desktop: %s samples (%.1f%c)\nMean: %.1f mbps\nStd. Dev.: %.1f mbps" % (n_bw_desktop, 100.0 * n_bw_desktop / n_bw, "%", mean(desktop_bw) / mbps, std(desktop_bw) / mbps))
        pyplot.legend(loc='upper right')

        pyplot.subplot(3, 1, 2)
        pyplot.title("Latency")
        pyplot.xlabel("Latency (ms)")
        pyplot.hist(mobile_lat, alpha=0.5, normed=True,
                    label="Mobile: %s samples (%.1f%c)\nMean: %.1f\nStd. Dev.: %.1f" % (n_lat_mobile, 100.0 * n_lat_mobile / n_lat, "%", mean(mobile_lat), std(mobile_lat)))
        pyplot.hist(desktop_lat, alpha=0.5, normed=True,
                    label="Desktop: %s samples (%.1f%c)\nMean: %.1f\nStd. Dev.: %.1f" % (n_lat_desktop, 100.0 * n_lat_desktop / n_lat, "%", mean(desktop_lat), std(desktop_lat)))
        pyplot.legend(loc='upper left')

        pyplot.subplot(3, 1, 3)
        pyplot.title("DNS")
        pyplot.xlabel("DNS (ms)")
        pyplot.hist(dns, normed=True)

        ahora = datetime.datetime.now().strftime("%d %b %Y")
        pyplot.suptitle("Web Performance Profile (last updted %s)" % ahora)
        pyplot.show()