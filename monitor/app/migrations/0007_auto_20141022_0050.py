# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20141022_0048'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicion',
            name='page',
            field=models.ForeignKey(to='app.Page', null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='scan',
            name='page',
            field=models.ForeignKey(to='app.Page', null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='medicion',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 22, 0, 50, 49, 682149)),
        ),
        migrations.AlterField(
            model_name='scan',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2014, 10, 22, 0, 50, 49, 682665)),
        ),
    ]
