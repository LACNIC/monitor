from django.db import models
from django.db.models.fields import FloatField


class Medicion(models.Model):
    lat = FloatField(default=0)
    let_err = FloatField(default=0)
    bw = FloatField(default=0)
    bw_err = FloatField(default=0)

    def __init__(self, lat=None, lat_err=None, bw=None, bw_err=None):
        self.lat = lat
        self.lat_err = lat_err
        self.bw = bw
        self.bw_err = bw_err