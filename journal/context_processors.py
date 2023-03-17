from django.conf import settings # import the settings file

def form_max_lengths(request):
    # return the value you want as a dictionnary. you may add multiple values in there.
    return {
        'CONTENT_MAX_LENGTH': settings.CONTENT_MAX_LENGTH,
    }