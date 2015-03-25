# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0017_auto_20150325_1715'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 16, 22, 542507)),
        ),
        migrations.AlterField(
            model_name='medicion',
            name='t_page',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 3, 25, 17, 16, 22, 544222)),
        ),
    ]
