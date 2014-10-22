import datetime
import urllib2

from django.db import models
from django.db.models.fields import FloatField, DateTimeField, TextField
from django.db.models.fields.related import ForeignKey


class Page(models.Model):
    url = TextField(default='')

    def scan(self):
        r = urllib2.urlopen(self.url)
        bytes = len(r.read())  # in bytes
        scan = Scan(date=datetime.datetime.now(), page=self, size=bytes)


class Medicion(models.Model):
    date = DateTimeField(default=datetime.datetime.now())
    lat = FloatField(default=0)
    lat_err = FloatField(default=0)
    bw = FloatField(default=0)
    bw_err = FloatField(default=0)
    url = TextField(default='')  # por si no hay paginas para esa URL
    page = ForeignKey(Page, null=True)

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


class Scan(models.Model):
    date = DateTimeField(default=datetime.datetime.now())
    page = ForeignKey(Page, null=True)
    size = FloatField(default=0)  # in bytes

    def __str__(self):
        return "%s is %s bytes" % (self.page.url, self.size)