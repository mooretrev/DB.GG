# Generated by Django 3.2.9 on 2021-12-05 23:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='date_released',
        ),
    ]
