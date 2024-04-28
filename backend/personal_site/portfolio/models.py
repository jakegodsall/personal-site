from django.db import models


class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="portfolio/thumbnails/")
    live_url = models.URLField()
    github_url = models.URLField()

    def __str__(self):
        return self.title
