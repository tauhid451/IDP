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
          <div class="d-flex justify-content-center">
            <div class="w-75">
                <div class="d-flex justify-content-center">
                  <img class="w-25 h-25" src="{{ asset('logo.jpeg') }}" alt="logo">
                </div>
                <div class="d-flex justify-content-center">
                  <h1>Admin Panel</h1>
                </div>
              <div>
                <form>
                  <div class="mb-4 d-flex flex-column">
                    <label for="kote">Kote</label>
                    <input type="text" name="kote" id="kote">
                  </div>
                  <div class="mb-4 d-flex flex-column">
                    <label for="kote_nco">Kote NCO</label>
                    <input type="text" name="kote_nco" id="kote_nco">
                  </div>
                  <div class="mb-4 d-flex flex-column">
                    <label for="opening_kote">Time of Opening Kote</label>
                    <input type="date" name="opening_kote" id="opening_kote">
                  </div>
                  <div class="mb-4 d-flex flex-column">
                    <label for="closing_kote">Time of closing Kote</label>
                    <input type="date" name="closing_kote" id="closing_kote">
                  </div>
                  <div class="d-flex justify-content-center">
                    <a href="/report" class="btn btn-primary" type="submit">Report</a>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </body>
</html>

