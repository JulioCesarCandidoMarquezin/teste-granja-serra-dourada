FROM php:8.2-apache

# Habilitar módulos do Apache (se necessário)
RUN a2enmod rewrite

# Copiar o arquivo php.ini para a configuração do PHP
COPY php.ini /usr/local/etc/php/

# Instalar extensões PHP (se necessário)
RUN docker-php-ext-install mysqli pdo pdo_mysql
