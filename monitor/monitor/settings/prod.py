from base import *

DEBUG = False
CHARTS_URL = "https://charts.dev.lacnic.net"  # *no* trailing slash

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = True
