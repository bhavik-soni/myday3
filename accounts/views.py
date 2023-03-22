from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.shortcuts import redirect, render
from .models import CustomUser
import email_validator


isSignUp = False
userId = ""

def my_login(request):
    global userId
    global isSignUp
    print("signpuisfalse")
    isSignUp = False
    if (request.user.is_authenticated):
        return redirect("journal:index")
    if request.method == "GET":
        return render(request, "accounts/login.html")
    if request.method == "POST":
        email, email_error = validate_email(request.POST.get("email"))
        password = request.POST.get("password")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            userId = user.id
            return redirect("journal:index")
        else:
            print("failed login")
            return render(request, "accounts/login.html", {"error": "Invalid login credentials"}) # TODO message doesn't show up correctly
        
def my_logout(request):
    logout(request)
    return redirect("accounts:login") # TODO successful logout message

def my_signup(request):
    global isSignUp
    isSignUp = True
    if request.method == "GET":
        return render(request, "accounts/login.html")
    if request.method == "POST":
        email, email_error = validate_email(request.POST.get("email").lower())
        password, password_error = validate_password(request.POST.get("password"))
        
        if email is None or password is None:
            print("incomplete form")
            return render(request, "accounts/login.html", {"error": "The form is incomplete"})
        if email_error:
            print(email_error)
            return render(request, "accounts/login.html", {"error": email_error})
        if password_error:
            print(password_error)
            return render(request, "accounts/login.html", {"error": password_error})

        if CustomUser.objects.filter(email=email).exists():
            print("email already taken")
            return render(request, "accounts/login.html", {"error": "Email already taken"})
        
        user = CustomUser.objects.create_user(email=email, password=password)
        user.save()
        return redirect("journal:index")
    
def validate_password(password):
    if len(password) == 0:
        return '', 'Password is required'
    if len(password) < 8:
        return '', 'Password must be at least 8 characters long'
    else: return password, ''

def validate_email(email):
    if (email is None): return '', 'Email is required'
    try:
        validation = email_validator.validate_email(email)
        validated_email = validation.email
    except email_validator.EmailNotValidError as e:
        return '', str(e)
    return validated_email, ''
    
def get_data(request):
    global isSignUp
    global userId
    data = {
        "isSignUp": isSignUp,
        "userId": userId,
    }

    return JsonResponse(data)
