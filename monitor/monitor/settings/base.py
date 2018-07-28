"""
Django settings for monitor project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import passwords

try:
    EMAIL_USE_TLS = os.environ.get("MONITOR_EMAIL_USE_TLS", passwords.EMAIL_USE_TLS)
    EMAIL_HOST = os.environ.get("MONITOR_EMAIL_HOST", passwords.EMAIL_HOST)
    EMAIL_PORT = os.environ.get("MONITOR_EMAIL_PORT", passwords.EMAIL_PORT)
    EMAIL_HOST_USER = os.environ.get("MONITOR_EMAIL_HOST_USER", passwords.EMAIL_HOST_USER)
    SERVER_EMAIL = os.environ.get("MONITOR_SERVER_EMAIL", passwords.SERVER_EMAIL)
    DEFAULT_FROM_EMAIL = os.environ.get("MONITOR_DEFAULT_FROM_EMAIL", passwords.DEFAULT_FROM_EMAIL)

    DBNAME = os.environ.get("MONITOR_DBNAME", passwords.DBNAME)
    DBUSER = os.environ.get("MONITOR_DBUSER", passwords.DBUSER)
    DBPASSWORD = os.environ.get("MONITOR_DBPASSWORD", passwords.DBPASSWORD)
    DBHOST = os.environ.get("MONITOR_DBHOST", passwords.DBHOST)
    DBPORT = os.environ.get("MONITOR_DBPORT", passwords.DBPORT)
    EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD", passwords.EMAIL_HOST_PASSWORD)
except ImportError:
    DBNAME = ""
    DBUSER = ""
    DBPASSWORD = ""
    DBHOST = ""
    DBPORT = ""
    EMAIL_HOST_PASSWORD = ""

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'l_1(qzd#nkgn6uyd(f)$^f@k=^tqsdexysz$@$p053xv3!m95!'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ADMINS = (
    ('Agustin Formoso', 'agustin@lacnic.net')
)

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ['ec2-54-94-179-9.sa-east-1.compute.amazonaws.com', 'localhost', '127.0.0.1']


# Application definition

INSTALLED_APPS = (
    'django_admin_bootstrapped',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app',
    'corsheaders'
)

MIDDLEWARE_CLASSES = (

    # CORS Middleware to allow Cross-Domain POSTs
    'corsheaders.middleware.CorsMiddleware',

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    # 'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
)

ROOT_URLCONF = 'monitor.urls'

WSGI_APPLICATION = 'monitor.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': DBNAME,
        'USER': DBUSER,
        'PASSWORD': DBPASSWORD,
        'HOST': DBHOST,
        'PORT': DBPORT,
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'es-uy'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = False


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = "%s/app/static/" % os.getcwd()

# Path to the geolocation files
GEOIP_PATH = '%sgeolocation' % (STATIC_ROOT)
GEOIP_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoLite2-Country.mmdb")
# GEOIP_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoIP.dat")
# GEOIP_ASN_DATABASE = '%s/%s' % (GEOIP_PATH, "GeoIPASNum.dat")

LACNIC_NETWORKS = [ "179.0.156.0/22", "190.112.52.0/22", "200.0.86.0/23", "200.0.88.0/24", "200.3.12.0/22", "200.7.84.0/23", "200.7.86.0/23", "200.10.60.0/23", "200.10.62.0/23", "2001:13c7:7001::/48", "2001:13c7:7002::/48", "2001:13c7:7003::/48", "2001:13c7:7010::/46", "2801::/48" ]

# Allow all sites to do CORS requests
CORS_ORIGIN_ALLOW_ALL = True

