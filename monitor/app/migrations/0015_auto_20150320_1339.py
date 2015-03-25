# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0014_auto_20150205_1323'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='t_done',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='t_page',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 20, 13, 39, 29, 97690)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 20, 13, 39, 29, 99330)),
        ),
    ]
