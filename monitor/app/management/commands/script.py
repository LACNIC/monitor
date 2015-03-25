from mailbox import mbox

__author__ = 'agustin'

import random
import datetime
import matplotlib.pyplot as pyplot
import user_agents as ua

from django.core.management.base import BaseCommand

from app.models import Medicion
import operator


class Command(BaseCommand):
    def handle(self, *args, **options):


        mbps = 1000000

        mobile = [m for m in Medicion.objects.mobile() if m.bw < 0.5 * mbps]
        desktop = [m for m in Medicion.objects.desktop() if m.bw < 0.5 * mbps]

        # devices
        devs = dict()
        for d in desktop:
            dev = ua.parse(d.user_agent).browser.family
            try:
                devs[dev] += 1
            except KeyError:
                devs[dev] = 1

        total = len(mobile) + len(desktop)

        mobile_bw = [m.bw for m in mobile]
        desktop_bw = [m.bw for m in desktop]

        pyplot.hist(mobile_bw, alpha=0.5, normed=True, label="Mobile (%.1f%c)" % (100.0 * len(mobile_bw) / total, "%"))
        pyplot.hist(desktop_bw, alpha=0.5, normed=True,
                    label="Desktop (%.1f%c)" % (100.0 * len(desktop_bw) / total, "%"))

        pyplot.legend(loc='upper right')
        pyplot.show()