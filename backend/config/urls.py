from django.urls import path
from apps.health.views import health
urlpatterns = [path('api/health/', health)]
