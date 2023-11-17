from django.conf import settings
from django.db import models


class Expenses(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    desc = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    amount = models.BigIntegerField(
        null=True,
        blank=True,
    )
    time = models.TimeField(
        auto_now=True,
        null=True,
        blank=True,
    )
    user_id = models.BigIntegerField(
        null=True,
        blank=True,
    )


# Create your models here.
