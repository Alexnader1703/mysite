FROM nginx:alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Копируем нашу конфигурацию Nginx
# Эта конфигурация заменит стандартную конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем файлы сайта
# Используем относительный путь, так как Dockerfile находится в папке docker
COPY ../src/ .

# Устанавливаем корректные права на файлы
# nginx процесс работает от пользователя nginx, поэтому нужны правильные права
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Указываем, что контейнер будет прослушивать порт 80
EXPOSE 80

# Проверяем конфигурацию Nginx при запуске контейнера
# В случае ошибки контейнер не запустится
CMD ["nginx", "-g", "daemon off;"]