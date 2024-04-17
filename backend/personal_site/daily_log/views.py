from rest_framework import viewsets
from .models import Skill, DailyEntry, Project
from .serializers import SkillSerializer, DailyEntrySerializer, ProjectSerializer
from .pagination import CustomPagination

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class DailyEntryViewSet(viewsets.ModelViewSet):
    serializer_class = DailyEntrySerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        queryset = DailyEntry.objects.all()
        skill_name = self.request.query_params.get('skill')
        project = self.request.query_params.get("project", None)

        if skill_name:
            queryset = queryset.filter(skill__name=skill_name)
        if project:
            queryset = queryset.filter(project__name=project)

        return queryset
