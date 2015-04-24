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

        tcp4 = [m.nt_con_end - m.nt_con_st for m in Medicion.objects.ipv4()]
        tcp6 = [m.nt_con_end - m.nt_con_st for m in Medicion.objects.ipv6()]

        pyplot.subplot(2, 1, 1)
        pyplot.title("TCP Connection Time")
        pyplot.xlabel("Time (ms)")
        pyplot.hist(tcp4, alpha=0.5, normed=True, label="IPv4", range=(0, 500))
        pyplot.legend(loc='upper right')

        pyplot.subplot(2, 1, 2)
        pyplot.title("TCP Connection Time")
        pyplot.xlabel("Time (ms)")
        pyplot.hist(tcp6, alpha=0.5, normed=True, label="IPv6", range=(0, 500))
        pyplot.legend(loc='upper right')

        ahora = datetime.datetime.now().strftime("%d %b %Y")
        pyplot.suptitle("Web Performance Profile (last updted %s)" % ahora)
        pyplot.show()