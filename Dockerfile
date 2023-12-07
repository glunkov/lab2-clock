# Use an official PHP runtime with Apache as a parent image
FROM php:8.0-apache

# Copy the PHP application into the container at /var/www/html
COPY . /var/www/html

# Use the default configuration
# Additional configuration can be added here

# Expose port 80 to the outside world
EXPOSE 80
