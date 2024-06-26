# Generated by Django 5.0.3 on 2024-04-28 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('daily_log', '0006_dailyentry_duration_alter_dailyentry_content_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='portfolio/thumbnails/')),
                ('live_url', models.URLField()),
                ('github_url', models.URLField()),
                ('skills', models.ManyToManyField(to='daily_log.skill')),
            ],
        ),
    ]
