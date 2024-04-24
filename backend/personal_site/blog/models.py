from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200)
    thumbnail = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title