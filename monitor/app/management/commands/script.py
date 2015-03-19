__author__ = 'agustin'

import random
import datetime

from django.core.management.base import BaseCommand

from app.models import Medicion


class Command(BaseCommand):
    def handle(self, *args, **options):

        ms = Medicion.objects.all()
        for m in ms:
            if m.lat > 0.0:
                print m.lat