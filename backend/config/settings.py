from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'torob-trip-demo-key'
DEBUG = True
ALLOWED_HOSTS = ['*']
ROOT_URLCONF = 'config.urls'
MIDDLEWARE = ['django.middleware.security.SecurityMiddleware', 'django.middleware.common.CommonMiddleware', 'corsheaders.middleware.CorsMiddleware']
INSTALLED_APPS = ['django.contrib.contenttypes', 'django.contrib.auth', 'rest_framework', 'apps.health']
DATABASES = {'default': {'ENGINE': 'django.db.backends.postgresql', 'NAME': 'torob_trip', 'USER': 'torob', 'PASSWORD': 'torob', 'HOST': 'postgres', 'PORT': '5432'}}
USE_TZ = True
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOW_ALL_ORIGINS = True
