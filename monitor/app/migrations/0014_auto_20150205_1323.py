# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20150203_1331'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 2, 5, 13, 23, 43, 499051)),
        ),
        migrations.AlterField(
            model_name='medicion',
            name='rt_start',
            field=models.TextField(default=b''),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 2, 5, 13, 23, 43, 500270)),
        ),
    ]
