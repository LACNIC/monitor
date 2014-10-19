# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('app', '0002_auto_20141016_0155'),
    ]

    operations = [
        migrations.RenameField(
            model_name='medicion',
            old_name='let_err',
            new_name='lat_err',
        ),
    ]
