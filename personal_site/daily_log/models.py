from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name


class DailyEntry(models.Model):
    class Meta:
        verbose_name_plural = "Daily Entries"

    class CategoryChoices(models.TextChoices):
        WID = 'WID', "What I've Done"
        WIL = 'WIL', "What I've Learned"

    datetime = models.DateTimeField(auto_now_add=True)
    category = models.TextField(max_length=20, choices=CategoryChoices.choices, default=CategoryChoices.WID)
    content = models.TextField(max_length=500)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)

    def __str__(self):
        formatted_datetime = self.datetime.strftime('%d-%m-%y %H:%M')
        return f"{self.skill} ({formatted_datetime})"

