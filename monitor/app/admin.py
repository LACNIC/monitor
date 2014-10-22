# Register your models here.
from django.contrib import admin

from app.models import Page, Scan
from models import Medicion


admin.site.register(Medicion)
admin.site.register(Page)
admin.site.register(Scan)