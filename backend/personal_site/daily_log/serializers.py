from rest_framework import serializers

from .models import Skill, Project, DailyEntry


class SkillSerializer(serializers.ModelSerializer):
    icon_url = serializers.SerializerMethodField()

    def get_icon_url(self, obj):
        if obj.icon:
            return self.context['request'].build_absolute_uri(obj.icon.url)
        return None

    class Meta:
        model = Skill
        fields = ('name', 'icon_url')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class DailyEntrySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    project = serializers.SlugRelatedField(
        queryset=Project.objects.all(),
        slug_field='name'
    )

    class Meta:
        model = DailyEntry
        fields = '__all__'


