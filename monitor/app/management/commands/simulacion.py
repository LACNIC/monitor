import random
import datetime

from django.core.management.base import BaseCommand

from app.models import Medicion


class Command(BaseCommand):
    args = '<poll_id poll_id ...>'
    help = 'Closes the specified poll for voting'

    def handle(self, *args, **options):
        k = 1000
        m = 1000 * k

        bws = [256 * k, 512 * k, 1 * m, 2 * m, 5 * m, 10 * m, 20 * m, 50 * m]

        for i in range(1, 100000):
            date = datetime.datetime.now() - datetime.timedelta(minutes=i)
            lat = random.lognormvariate(4.6, 3) + 5  # ln(100) = 4.6
            lat_err = random.uniform(0, 0.5)
            bw = random.lognormvariate(12, 3)
            bw_err = random.uniform(0, 0.5)
            m = Medicion(lat=lat, lat_err=lat_err, bw=bw, bw_err=bw_err, date=date)
            print 100 * i / 100000
            m.save()