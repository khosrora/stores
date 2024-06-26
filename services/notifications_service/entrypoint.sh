#!/bin/bash
# Wait for RabbitMQ to be ready
while ! nc -z rabbitmq_container_store 5672; do
  echo "Waiting for RabbitMQ..."
  sleep 2
done
echo "RabbitMQ is up - executing command"
# Start Django server
python manage.py runserver 0.0.0.0:8000 &

# Start Celery worker
celery -A notifications_service worker -l info

