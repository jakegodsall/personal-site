# Generated by Django 5.0.3 on 2024-04-17 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('daily_log', '0003_rename_skill_dailyentry_skills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dailyentry',
            name='datetime',
            field=models.DateTimeField(null=True),
        ),
    ]