from django.db import models
from django.db.models.fields import FloatField


class Medicion(models.Model):
    latencia = FloatField()
