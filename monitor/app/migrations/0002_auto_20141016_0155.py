# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='medicion',
            name='latencia',
        ),
        migrations.AddField(
            model_name='medicion',
            name='bw',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='bw_err',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='lat',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='medicion',
            name='let_err',
            field=models.FloatField(default=0),
            preserve_default=True,
        ),
    ]
