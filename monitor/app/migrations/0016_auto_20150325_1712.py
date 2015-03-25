# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0015_auto_20150320_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 12, 15, 287768)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 12, 15, 289080)),
        ),
    ]
