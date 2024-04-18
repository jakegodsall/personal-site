# Generated by Django 5.0.3 on 2024-04-18 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('daily_log', '0005_remove_skill_description_alter_skill_icon'),
    ]

    operations = [
        migrations.AddField(
            model_name='dailyentry',
            name='duration',
            field=models.PositiveIntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='dailyentry',
            name='content',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='skill',
            name='icon',
            field=models.FileField(upload_to='daily_log/icons/'),
        ),
    ]