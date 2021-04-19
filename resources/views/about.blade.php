<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>AMS</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
       <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Arsenal Management System</a>
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
                <div>
                  <p>
                        This smart weapons management system is one in which the management of weapons 
                        control and monitoring can be done at the ground level.
                  </p>
                  <p>
                    Authorization and issuance of authorization can be done at any location of military 
                    departments or camps even in different regions. 

                    Monitoring and data will be monitored regularly by authorized departments. 
                  </p>
                  <p>
                    The system also includes some components such as  management services and 
                    communications services. 
                  </p>
                  <p>
                    Ideally, for military, police, prisons, and other security agencies that require a quick and 
                    easy way to manage supply chain-of custody for armory inventory and other critical assets.
                  </p>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </body>
</html>

