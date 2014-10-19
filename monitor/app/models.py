import datetime

from django.db import models
from django.db.models.fields import FloatField, DateTimeField


class Medicion(models.Model):
    date = DateTimeField(default=datetime.datetime.now())
    lat = FloatField(default=0)
    lat_err = FloatField(default=0)
    bw = FloatField(default=0)
    bw_err = FloatField(default=0)

    def __str__(self):
        return "%s %s %s" % (self.print_lat(), self.print_bw(), self.print_date())

    def print_lat(self):
        return "%s ms" % str(int(self.lat))

    def print_date(self):
        return self.date.strftime("%d, %b")

    def print_bw(self):
        k = 1000
        m = 1000 * k
        B = "bps"
        K = "kbps"
        M = "mbps"
        value = str(self.bw)
        unit = B

        if self.bw < k:
            value = str(int(self.bw))
            unit = B

        elif self.bw < m:
            value = str(int(self.bw / k))
            unit = K

        else:
            value = str(int(self.bw / m))
            unit = M

        return "%s %s" % (value, unit)
        #
        # def __init__(self, lat=None, lat_err=None, bw=None, bw_err=None):
        # self.lat = lat
        # self.lat_err = lat_err
        # self.bw = bw
        # self.bw_err = bw_err