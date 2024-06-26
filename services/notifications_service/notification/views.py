from rest_framework.views import APIView
from rest_framework.response import Response
from .tasks import send_email, send_sms

class EmailNotification(APIView):
    def post(self, request):
        subject = request.data.get('subject')
        message = request.data.get('message')
        from_email = request.data.get('from_email')
        recipient_list = request.data.get('recipient_list')
        
        # Queue the task
        task = send_email.delay(subject, message, from_email, recipient_list)
        
        return Response({
            'status': 'Email notification queued',
            'task_id': task.id
        })

class SMSNotification(APIView):
    def post(self, request):
        phone_number = request.data.get('phone_number')
        message = request.data.get('message')
        
        # Queue the task
        task = send_sms.delay(phone_number, message)
        
        return Response({
            'status': 'SMS notification queued',
            'task_id': task.id
        })
