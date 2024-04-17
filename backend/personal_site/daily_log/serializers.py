from rest_framework import serializers

from .models import Skill, Project, DailyEntry


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class DailyEntrySerializer(serializers.ModelSerializer):
    skills = serializers.SlugRelatedField(
        many=True,
        queryset=Skill.objects.all(),
        slug_field='name'
    )
    project = serializers.SlugRelatedField(
        queryset=Project.objects.all(),
        slug_field='name'
    )
    class Meta:
        model = DailyEntry
        fields = '__all__'


