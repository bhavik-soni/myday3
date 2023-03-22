from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
from django.http import JsonResponse
from .models import Entry
from django.contrib.auth import get_user_model
import json

user = get_user_model()


class IndexView(LoginRequiredMixin, TemplateView):
    template_name = 'journal/index.html'
    login_url = "accounts:login"

    def get_context_data(self):
        return

def entry_view(request, entry_id=None, author_id=None):
    if request.method == 'GET':
        # Retrieve a specific entry by Entry ID
        if entry_id:
            entry = Entry.objects.get(pk=entry_id)
            return JsonResponse({'id': entry.id, 'author': entry.author.id, 'content': entry.content, 'created_at': entry.created_at, 'updated_at': entry.updated_at})
        elif author_id:
            # Retrieve entries by author id for today based on user's timezone
            entries = Entry.objects.filter(author=user.objects.get(pk=author_id), created_at=timezone.localdate())
            entries_data = [{'id': entry.id, 'author': entry.author.id, 'content': entry.content, 'created_at': entry.created_at, 'updated_at': entry.updated_at} for entry in entries]
            return JsonResponse({'entries': entries_data})
        else:
            return JsonResponse({'error': 'Missing required fields in request body'}, status=400)
    elif request.method == 'POST':
        try:
            # Update existing entry with new content
            today = timezone.localtime().date()

            entry_data = json.loads(request.body)            
            entry_author = entry_data.get('author')
            author = user.objects.get(pk=entry_author)
            new_entry_content = entry_data.get('content')
            entry = Entry.objects.filter(author=entry_author, created_at=today).first()
            
            if entry:
                entry.content = new_entry_content
                entry.save()
            else:
                entry = Entry.objects.create(author=author, content="")

            return JsonResponse({'id': entry.id, 'author': entry.author.id, 'content': entry.content, 'created_at': entry.created_at, 'updated_at': entry.updated_at}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON in request body'}, status=400)
        except KeyError:
            return JsonResponse({'error': 'Missing required fields in request body'}, status=400)