from rest_framework import viewsets
from .models import Skill, DailyEntry, Project
from .serializers import SkillSerializer, DailyEntrySerializer, ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class DailyEntryViewSet(viewsets.ModelViewSet):
    serializer_class = DailyEntrySerializer

    def get_queryset(self):
        queryset = DailyEntry.objects.all()
        skill_name = self.request.query_params.get('skill')
        if skill_name is not None:
            queryset = queryset.filter(skill__name=skill_name)
        project_name = self.request.query_params.get("project", None)
        if project_name is not None:
            queryset = queryset.filter(project__name=project_name)
        return queryset
