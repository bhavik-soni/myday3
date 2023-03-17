from django.db import models
from django.conf import settings

class Post(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # conneceted to customer User model
    content = models.CharField(max_length=settings.CONTENT_MAX_LENGTH) # Approximately 1000 words
    date = models.DateField(auto_now_add=True) # will always use the date in the default timezone at the moment of creation or update.


    def __str__(self):
        return f"{self.user} posted {self.content[:15]} on {self.date}"