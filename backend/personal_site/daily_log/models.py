from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=200)
    icon = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class DailyEntry(models.Model):
    class Meta:
        verbose_name_plural = "Daily Entries"

    datetime = models.DateTimeField(null=True)
    content = models.TextField(max_length=500)
    skills = models.ManyToManyField(Skill, related_name="daily_entries")
    project = models.ForeignKey(Project, related_name='daily_entries', on_delete=models.CASCADE)

    def __str__(self):
        formatted_datetime = self.datetime.strftime('%d-%m-%y %H:%M')
        return f"{self.skill} ({formatted_datetime})"

