# Generated by Django 5.0.3 on 2024-04-06 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('daily_log', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyentry',
            name='skill',
            field=models.ManyToManyField(related_name='daily_entries', to='daily_log.skill'),
        ),
    ]
