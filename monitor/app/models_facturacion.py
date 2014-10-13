from django.db import models
from django.db.models.fields import TextField, FloatField, DateTimeField
from django.db.models.fields.related import ForeignKey


class Factura(models.Model):
    fecha_vencimiento = DateTimeField()
    monto = FloatField()
    cliente = ForeignKey(Cliente)


class Pago(models.Model):
    factura = ForeignKey(Factura)


class Cuenta(models.Model):
    nombre = TextField()


class Cliente(models.Model):
    fecha_registro = TextField()
    nombre = TextField()
