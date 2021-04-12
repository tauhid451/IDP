<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

  <title>AMS</title>
  <link rel="icon" href="{{ asset('images/logos/logo-with-black-bg.svg') }}" type="image/icon type">

  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body>
  
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  
  <!-- Scripts -->
  <script src="{{ asset('js/app.js')}}"></script>
  
</body>
</html>