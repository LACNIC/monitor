from django.conf.urls import patterns, url
from django.conf.urls.static import static

from app import views
from monitor import settings


urlpatterns = patterns('',
                       url(r'^$', views.home, name='home'),
                       url(r'^post/', views.post, name='post'),
                       url(r'^stats/', views.stats, name='stats'),
                       url(r'^stats2/', views.stats2, name='stats2'),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)