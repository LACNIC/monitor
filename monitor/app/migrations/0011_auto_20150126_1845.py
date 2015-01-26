# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_auto_20150126_1835'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 26, 18, 45, 22, 609455)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 26, 18, 45, 22, 611251)),
        ),
    ]
