# notifications/urls.py
from django.urls import path
from .views import EmailNotification, SMSNotification

urlpatterns = [
    path('send-email/', EmailNotification.as_view(), name='send_email'),
    path('send-sms/', SMSNotification.as_view(), name='send_sms'),
]
