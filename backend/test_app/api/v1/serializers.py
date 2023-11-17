from rest_framework import serializers
from test_app.models import Expenses, Expenses


class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = "__all__"
