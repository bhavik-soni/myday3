from django.conf import settings # import the settings file

def form_max_lengths(request):
    # return the value you want as a dictionnary. you may add multiple values in there.
    # I was using a char field for some reason but have a teext field now so this is not needed anymore
    return {
        'CONTENT_MAX_LENGTH': settings.CONTENT_MAX_LENGTH,
    }