from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name


class DailyEntry(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)

    def __str__(self):
        formatted_datetime = self.datetime.strftime('%d-%m-%y %H:%M')
        return f" {self.skill.name} ({formatted_datetime})"


class DailyEntryDetail(models.Model):
    class CategoryChoices(models.TextChoices):
        WID = 'WID', "What I've Done"
        WIL = 'WIL', "What I've Learned"

    category = models.TextField(max_length=2, choices=CategoryChoices.choices)
    content = models.TextField(max_length=500)
    daily_entry = models.ForeignKey(DailyEntry, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.daily_entry} (id: {self.id})"
