from rest_framework import viewsets
from .models import Skill, DailyEntry
from .serializers import SkillSerializer, DailyEntrySerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class DailyEntryViewSet(viewsets.ModelViewSet):
    queryset = DailyEntry.objects.all()
    serializer_class = DailyEntrySerializer
