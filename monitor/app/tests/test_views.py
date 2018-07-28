from django.test import TestCase
from django.test import Client
from django.core.urlresolvers import reverse


class ViewTestCase(TestCase):

    OK = 200

    def get_section(self, url, status=OK):
        c = Client()
        response = c.get(url)
        self.assertEqual(response.status_code, status)

    # def test_navtiming(self):
    #     return self.get_section(reverse("app.views.navtiming.navtiming"), self.OK)

    def test_home(self):
            return self.get_section(reverse("app.views.views.home"), self.OK)
