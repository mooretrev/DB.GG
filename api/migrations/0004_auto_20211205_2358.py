# Generated by Django 3.2.9 on 2021-12-05 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211205_2354'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='best_seller',
        ),
        migrations.RemoveField(
            model_name='game',
            name='hot_list',
        ),
        migrations.AddField(
            model_name='game',
            name='categories',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='game',
            name='genres',
            field=models.TextField(default=''),
        ),
    ]
