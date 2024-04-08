from django.contrib import admin

from .models import Skill, Project, DailyEntry

admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(DailyEntry)
