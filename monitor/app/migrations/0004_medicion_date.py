# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime

from django.db import models, migrations


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0003_auto_20141019_0117'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 19, 13, 35, 34, 494715)),
            preserve_default=True,
        ),
    ]
