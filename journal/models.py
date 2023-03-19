from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError
from django.utils import timezone

class Entry(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.author} posted {self.content[:15]} on {self.created_at}"

    @classmethod
    def create(cls, **kwargs):
        # check if there is already an existing entry for the same author and day
        existing_entry = cls.objects.filter(
            author=kwargs['author'],
            created_at=timezone.localtime().date(),
        ).first()

        if existing_entry:
            raise ValidationError("Only one entry allowed per day.")

        # call the default create method to create and save the new instance
        return super().create(**kwargs)
