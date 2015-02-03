# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_auto_20150126_1912'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='user_agent',
            field=models.TextField(default=b''),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 2, 3, 13, 31, 16, 793614)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 2, 3, 13, 31, 16, 795225)),
        ),
    ]
