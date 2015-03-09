# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url_imagen', models.URLField(max_length=250, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=50)),
                ('especialidad', models.CharField(max_length=50)),
                ('cop', models.CharField(max_length=20)),
                ('universidad', models.CharField(max_length=150)),
                ('cursos', models.CharField(max_length=250)),
                ('url_imagen', models.URLField(max_length=250, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('titulo', models.CharField(max_length=50)),
                ('descripcion', models.TextField(max_length=450)),
                ('url_imagen', models.URLField(max_length=250, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('titulo', models.CharField(max_length=50)),
                ('descripcion', models.TextField(max_length=450)),
                ('url_imagen', models.URLField(max_length=250, null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
