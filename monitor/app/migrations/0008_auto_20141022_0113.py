# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20141022_0050'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='ip_destination',
            field=models.IPAddressField(default=b'127.0.0.1'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='ip_origin',
            field=models.IPAddressField(default=b'127.0.0.1'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 22, 1, 13, 27, 98321)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 22, 1, 13, 27, 98915)),
        ),
    ]
