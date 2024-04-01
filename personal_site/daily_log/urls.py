from rest_framework import routers

from .views import SkillViewSet, DailyEntryViewSet

router = routers.DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'daily-entries', DailyEntryViewSet, basename='daily-entry')

urlpatterns = router.urls
