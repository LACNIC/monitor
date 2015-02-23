#!/usr/bin/env bash

apt-get update

apt-get -y --force-yes install \
git \
python-dev \
apache2

wget https://bootstrap.pypa.io/get-pip.py && python get-pip.py && rm get-pip.py

pip install django==1.6
pip install django-admin-bootstrapped
pip install django-cors-headers

echo "Finalizó la instalación de las dependencias de la VM..."