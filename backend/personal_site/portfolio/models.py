from django.db import models
from daily_log.models import Skill


class Portfolio(models.Model):
    class Meta:
        verbose_name = "Portfolio Detail"

    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="portfolio/thumbnails/", )
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField(Skill)

    def __str__(self):
        return self.title
