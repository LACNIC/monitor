__author__ = 'agustin'

from django.core.management.base import BaseCommand

from app.models import Medicion
import monitor.settings as settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        # DNS times
        import geoip2.database
        from geoip2.errors import AddressNotFoundError

        reader = geoip2.database.Reader(settings.GEOIP_DATABASE)
        countries = {}
        for d in Medicion.objects.dns():
            cc = reader.country(d.ip_origin).country.iso_code
            dt = d.nt_dns_end - d.nt_dns_st
            if cc in countries.keys():
                countries[cc].append(dt)
            else:
                countries[cc] = [dt]

        for c in countries:
            lats = countries[c]
            print "['%s', %s]," % (c, sum(lats) / len(lats))

            # Bandwidth
            # for d in Medicion.objects.clean():
            # try:
            #         cc = reader.country(d.ip_origin).country.iso_code
            #     except AddressNotFoundError:
            #         cc = 'XX'
            #     dt = d.bw
            #     if cc in countries.keys():
            #         countries[cc].append(dt)
            #     else:
            #         countries[cc] = [dt]
            #
            # for c in countries:
            #     lats = countries[c]
            #     # print "['%s', %s]," % (c, sum(lats) / len(lats))
            #
            #  # Latency
            # for d in Medicion.objects.clean():
            #     try:
            #         cc = reader.country(d.ip_origin).country.iso_code
            #     except AddressNotFoundError:
            #         cc = 'XX'
            #     dt = d.lat
            #     if cc in countries.keys():
            #         countries[cc].append(dt)
            #     else:
            #         countries[cc] = [dt]
            #
            # for c in countries:
            #     lats = countries[c]
            #     # print "['%s', %s]," % (c, sum(lats) / len(lats))
