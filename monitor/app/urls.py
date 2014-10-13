from django.conf.urls import patterns, url
from django.conf.urls.static import static

from app import views
from monitor import settings


urlpatterns = patterns('',
                       # url(r'^$', views.home, name='home'),
                       url(r'post/', views.home, name='home'),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)