from datetime import timedelta
from django.utils import timezone
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):
    def get_paginated_response(self, data):
        now = timezone.now().date()
        today = []
        yesterday = []
        last_7_days = []
        older = []

        for item in data:
            log_date = item['date']
            if log_date == now:
                today.append(item)
            elif log_date == now - timedelta(days=1):
                yesterday.append(item)
            elif now - timedelta(days=7) <= log_date <= now:
                last_7_days.append(item)
            else:
                older.append(item)

        # Only show the "older" logs if we are beyond the first page
        if self.page.number != 1:
            grouped_data = older
        else:
            grouped_data = {
                'today': today,
                'yesterday': yesterday,
                'last_7_days': last_7_days,
                'show_more': older[:30]  # Show the first 30 older items initially
            }

        return Response({
            'links': {
               'next': self.get_next_link(),
               'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'results': grouped_data
        })