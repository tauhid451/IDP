<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <!-- <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
       </div> -->
       <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Arsenal Management System</a>
                <div>
                    @if (Route::has('login'))
                        <div class="top-right links">
                            @auth
                                <a href="{{ url('/home') }}">Home</a>
                            @else
                                <a href="{{ route('login') }}">Login</a>

                                @if (Route::has('register'))
                                    <a href="{{ route('register') }}">Register</a>
                                @endif
                            @endauth
                            <a href="/about">About us</a>
                        </div>
                    @endif
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="d-flex justify-content-center">
                    <div class="d-flex justify-content-center">
                        <img class="w-50 h-75" src="{{ asset('logo.jpeg') }}" alt="logo">
                    </div>
                </div>
                <div class="col"></div>
            </div>

            <div class="row">
                <div class="col"></div>
                <div class="d-flex justify-content-center">
                    <div>
                        <h1> Arsenal Management System</h1>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </body>
</html>
