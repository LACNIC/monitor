__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion


class Command(BaseCommand):
    def handle(self, *args, **options):

        visits = {}

        ds = Medicion.objects.clean()
        n = len(ds)
        for d in ds:

            os = d.os_family()
            b = d.browser_family()

            if os not in visits.keys():
                visits[os] = {}
            if b not in visits[os].keys():
                visits[os][b] = 0
            visits[os][b] += 1

        for os in visits.keys():
            print "\n%s\n===" % (os)

            for b in visits[os].keys():
                print "%s : %s" % (b, visits[os][b])

        print visits