# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_auto_20150126_1816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 26, 18, 35, 9, 204506)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 26, 18, 35, 9, 206054)),
        ),
    ]
