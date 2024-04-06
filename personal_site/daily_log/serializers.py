from rest_framework import serializers

from .models import Skill, Project, DailyEntry


class DailyEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyEntry
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    daily_entries = DailyEntrySerializer(many=True)

    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    daily_entries = DailyEntrySerializer(many=True)
    class Meta:
        model = Project
        fields = '__all__'
