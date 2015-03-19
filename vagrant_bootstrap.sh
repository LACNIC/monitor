#!/usr/bin/env bash

apt-get update

apt-get -y --force-yes install \
git \
apache2

sudo apt-get install python-dev apache2-dev
sudo apt-get install postgresql postgresql-contrib
sudo apt-get install postgresql-client-common
sudo apt-get install python-psycopg2
sudo apt-get install python-matplotlib

wget https://bootstrap.pypa.io/get-pip.py && python get-pip.py && rm get-pip.py

pip install django==1.6
pip install django-admin-bootstrapped
pip install django-cors-headers
pip install numpy
pip install matplotlib

echo "Finalizó la instalación de las dependencias de la VM..."