import datetime
import urllib2

from django.db import models
from django.db.models.fields import FloatField, DateTimeField, TextField, IPAddressField
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
    ip_origin = IPAddressField(default='127.0.0.1')
    ip_destination = IPAddressField(default='127.0.0.1')

    nt_red_cnt = FloatField(default=0)
    nt_nav_type = FloatField(default=0)
    nt_nav_st = FloatField(default=0)
    nt_red_st = FloatField(default=0)
    nt_red_end = FloatField(default=0)
    nt_fet_st = FloatField(default=0)
    nt_dns_st = FloatField(default=0)
    nt_dns_end = FloatField(default=0)
    nt_con_st = FloatField(default=0)
    nt_con_end = FloatField(default=0)
    nt_req_st = FloatField(default=0)
    nt_res_st = FloatField(default=0)
    nt_res_end = FloatField(default=0)
    nt_domloading = FloatField(default=0)
    nt_domint = FloatField(default=0)
    nt_domcontloaded_st = FloatField(default=0)
    nt_domcontloaded_end = FloatField(default=0)
    nt_domcomp = FloatField(default=0)
    nt_load_st = FloatField(default=0)
    nt_load_end = FloatField(default=0)
    nt_unload_st = FloatField(default=0)
    nt_unload_end = FloatField(default=0)
    nt_spdy = FloatField(default=0)
    nt_first_paint = FloatField(default=0)
    rt_start = FloatField(default=0)
    rt_tstart = FloatField(default=0)
    rt_bstart = FloatField(default=0)
    rt_end = FloatField(default=0)
    bw_time = FloatField(default=0)

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