from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
                       # Examples:
                       # url(r'^$', 'monitor.views.home', name='home'),
                       url(r'monitor/', include('app.urls')),

                       url(r'^admin/', include(admin.site.urls)),
)
