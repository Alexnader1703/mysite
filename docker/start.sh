#!/bin/bash

# Останавливаем и удаляем предыдущий контейнер, если он существует
echo "Cleaning up previous containers..."
docker stop my-website 2>/dev/null
docker rm my-website 2>/dev/null

# Собираем Docker образ
# -t задает тег (имя) для образа
# . указывает на текущую директорию как контекст сборки
echo "Building Docker image..."
docker build -t my-website:latest .

# Запускаем новый контейнер
# -d запускает контейнер в фоновом режиме
# -p мапит порт 8080 хоста на порт 80 контейнера
# --name задает имя контейнера
echo "Starting container..."
docker run -d -p 8080:80 --name my-website my-website:latest

# Проверяем статус
echo "Checking container status..."
docker ps | grep my-website

echo "Website should be available at http://localhost:8080"