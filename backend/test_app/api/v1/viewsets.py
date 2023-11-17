from rest_framework import authentication
from test_app.models import Expenses, Expenses, Expenses
from .serializers import ExpensesSerializer, ExpensesSerializer, ExpensesSerializer
from rest_framework import viewsets


class ExpensesViewSet(viewsets.ModelViewSet):
    serializer_class = ExpensesSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Expenses.objects.all()
