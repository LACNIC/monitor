# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0016_auto_20150325_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 15, 47, 836188)),
        ),
        migrations.AlterField(
            model_name='medicion',
            name='t_done',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 15, 47, 840106)),
        ),
    ]
