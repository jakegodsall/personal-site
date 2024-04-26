from django.db import models
from ckeditor.fields import RichTextField


class Post(models.Model):
    title = models.CharField(max_length=200)
    thumbnail = models.TextField()
    content = RichTextField()

    def __str__(self):
        return self.title