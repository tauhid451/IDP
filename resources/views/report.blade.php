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
              <h1>Report</h1>
          </div>
          <div class="mt-3 d-flex justify-content-between">
            <div>
              <div>Date: 10/01/21 </div>
              <div>Time of Opening Kate: 10.00 am </div>
              <div>Time of Closing Kate: 10.00 pm</div>
            </div>
            <div>
              <div>Kote: 10232</div>
              <div>Kote NCO: 10203</div>
            </div>
          </div>

          <div class="mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Weapon</th>
                  <th scope="col">In Kote</th>
                  <th scope="col">On Duty</th>
                  <th scope="col">Out Station</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AK-47</td>
                  <td>12</td>
                  <td>22</td>
                  <td>32</td>
                  <td>92</td>
                </tr>
                <tr>
                  <td>AK-47</td>
                  <td>12</td>
                  <td>22</td>
                  <td>32</td>
                  <td>92</td>
                </tr>
                <tr>
                  <td>AK-47</td>
                  <td>12</td>
                  <td>22</td>
                  <td>32</td>
                  <td>92</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </body>
</html>

