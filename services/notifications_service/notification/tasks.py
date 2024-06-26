from celery import shared_task
import smtplib
from twilio.rest import Client

@shared_task
def send_email(subject, message, from_email, recipient_list):
    # Implementation of email sending
    # Use appropriate error handling here
    try:
        smtp = smtplib.SMTP('smtp.example.com')
        smtp.login('username', 'password')
        smtp.sendmail(from_email, recipient_list, message)
        smtp.quit()
        return "Email sent successfully"
    except Exception as e:
        return f"Failed to send email: {str(e)}"

@shared_task
def send_sms(phone_number, message):
    # Implementation of SMS sending
    # Use appropriate error handling here
    try:
        client = Client('ACCOUNT_SID', 'AUTH_TOKEN')
        message = client.messages.create(body=message, from_='+1234567890', to=phone_number)
        return f"SMS sent successfully. SID: {message.sid}"
    except Exception as e:
        return f"Failed to send SMS: {str(e)}"
