from rest_framework import serializers

from .models import Skill, DailyEntry


class DailyEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyEntry
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    daily_entries = DailyEntrySerializer(many=True)

    class Meta:
        model = Skill
        fields = '__all__'
