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
    skills = serializers.StringRelatedField(many=True)
    project = serializers.StringRelatedField()
    class Meta:
        model = DailyEntry
        fields = '__all__'


