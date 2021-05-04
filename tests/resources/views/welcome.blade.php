<!-- <!DOCTYPE html> -->
<!-- <html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> -->
    <!-- <head> -->
        <!-- <meta charset="utf-8"> -->
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

        <!-- <title>ASM</title> -->

        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet"> -->

        <!-- Styles -->
        <!-- <link rel="stylesheet" href="css/app.css"> -->
        <!-- <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style> -->
    <!-- </head> -->
    <!-- <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                    @endauth
                </div>
            @endif

            <div class="content">
              <div >
                <img src="img/home1.png" alt="Home" style="width: 100%;height: 600px;object-fit: cover;">
              </div>
                <div class="title m-b-md mt-5">
                  Arsenal Management System
                </div>
            </div>
        </div>
    </body> -->

<!-- </html> -->
<!DOCTYPE html>
<html lang="en">
<!-- To declare your language - read more here: https://www.w3.org/International/questions/qa-html-language-declarations -->
<head>
<title>Arsenal Maintenance System</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
</head>
<body id="top">
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- Top Background Image Wrapper -->
<div class="bgded" style="background-image:url('images/demo/backgrounds/01.png');"> 
  <!-- ################################################################################################ -->
  <div class="wrapper row1">
    <header id="header" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <div id="logo" class="fl_left">  
        <h1><a href="index.html">Arsenal Maintenance System</a></h1>
      </div>
      <nav id="mainav" class="fl_right">
        <ul class="clear">
            @if (Route::has('login'))
                    @auth
                        <li class="active">
                            <a href="{{ url('/home') }}">Home</a>
                        </li>
                    @else
                        <li>
                            <a href="{{ route('login') }}">Login</a>
                        </li>
                    @endauth
            @endif
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
      <!-- ################################################################################################ -->
    </header>
  </div>
  <!-- ################################################################################################ -->
  <!-- ################################################################################################ -->
  <!-- ################################################################################################ -->
  <div class="wrapper">
    <article id="pageintro" class="hoc clear"> 
      <!-- ################################################################################################ -->
      <div class="transbox">
        <h3 class="heading">Arsenal <br> Maintenance System</h3>
        <p align="justify">This smart weapons management system is one in which the management of weapons 
          control and monitoring can be done at the ground level. Authorization and issuance of authorization 
          can be done at any location of military departments or camps even in different regions.</p>
      </div>
      <footer><a class="btn" href="#about">About us</a></footer>
      <!-- ################################################################################################ -->
    </article>
  </div>
  <!-- ################################################################################################ -->
</div>
<!-- End Top Background Image Wrapper -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <main class="hoc container clear"> 
    <!-- main body -->
    <!-- ################################################################################################ -->
    <article class="group">
      <div class="one_quarter first">
        <a name="about" class="font-xs">About</a>
        <h6 class="heading">Arsenal Maintenance System</h6>
      </div>
      <div class="three_quarter">
        <p align="justify">This smart weapons management system is one in which the management of weapons 
          control and monitoring can be done at the ground level.Authorization and issuance of authorization can 
          be done at any location of military departments or camps even in different regions. 
          Monitoring and data will be monitored regularly by authorized departments.  
          Ideally, for military, police, prisons, and other security agencies that require a quick and 
          easy way to manage supply chain-of custody for armory inventory and other critical assets.
          </p>
        <p class="btmspace-30">This product is for kote management of each individual unit of Bangladesh Army.</p>
      </div>
    </article>
    <!-- ################################################################################################ -->
    <!-- / main body -->
    <div class="clear"></div>
  </main>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper bgded overlay" style="background-image:url('images/demo/backgrounds/02.png');">
  <section class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <h6 class="heading">Features</h6>
    </div>
    <ul class="nospace group elements">
      <li class="one_third first">
        <article><a href=""><i class="fa fa-chain-broken"></i></a>
          <h6 class="heading">Access Control Mechanism</h6>
          <p>Nostra per inceptos himenaeos sed eu sapien auctor pharetra ligula nec pharetra lacus [&hellip;]</p>
        </article>
      </li>
      <li class="one_third">
        <article><a href=""><i class="fa fa-id-badge"></i></a>
          <h6 class="heading">Kote NCO Entry and Exit Control Mechanism</h6>
          <p>Ante a imperdiet dui felis non lacus mauris risus interdum quis nulla et fringilla vestibulum [&hellip;]</p>
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fa fa-database" aria-hidden="true"></i></a>
          <h6 class="heading">Server and Database Management</h6>
          <p>Integer finibus sagittis mollis aliquam erat volutpat nulla lacinia sodales augue eu [&hellip;]</p>
        </article>
      </li>
      <li class="one_half first">
        <article><a href="#"><i class="fa fa-unlock-alt" aria-hidden="true"></i></a>
          <h6 class="heading">Automatic Weapon Issue and Deposition Procedure</h6>
          <p>A interdum ornare purus augue faucibus nibh sed interdum leo lorem a justo curabitur [&hellip;]</p>
        </article>
      </li>
      <li class="one_half">
        <article><a href="#"><i class="fa fa-archive" aria-hidden="true"></i></a>
          <h6 class="heading">Smart Weapon Rack System</h6>
          <p>Ornare suspendisse potenti donec rhoncus magna in tempus feugiat suspendisse auctor [&hellip;]</p>
        </article>
      </li>
    </ul>
    <!-- ################################################################################################ -->
  </section>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <section class="hoc container clear"> 
    <!-- ################################################################################################ -->
    <div class="sectiontitle">
      <h6 class="heading">Who've Worked</h6>
      <p>The person worked in the Arsenal Maintenance System Project are</p>
    </div>
    <div class="group latest">
      <figure class="one_third first"><a href="#"><img class="btmspace-30" src="images/demo/raquib.png" alt=""></a>
        <figcaption>
          <h6 class="heading font-x1">Maj Raquib</h6>
          <em class="font-xs">BA-7510 <br> Maj Raquib Hasan Dewan </em>
          <footer>
            <ul class="faico clear">
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure class="one_third"><a href="#"><img class="btmspace-30" src="images/demo/erteka.png" alt=""></a>
        <figcaption>
          <h6 class="heading font-x1">Maj Erteka</h6>
          <em class="font-xs">BA-7510 <br> Maj Erteka-Ur-Rahman</em>
          <footer>
            <ul class="faico clear">
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure class="one_third"><a href="#"><img class="btmspace-30" src="images/demo/tauhid.png" alt=""></a>
        <figcaption>
          <h6 class="heading font-x1">Lt Tauhid</h6>
          <em class="font-xs">BA-10451 <br> Lt Md Tauhidur Rahman</em>
          <footer>
            <ul class="faico clear">
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure class="one_half first"><a href="#"><img class="btmspace-30" src="images/demo/rizwan.png" alt=""></a>
        <figcaption>
          <h6 class="heading font-x1">Lt Rizwan</h6>
          <em class="font-xs">BA-10465 <br> Lt Rizwanul Haque</em>
          <footer>
            <ul class="faico clear">
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure class="one_half"><a href="#"><img class="btmspace-30" src="images/demo/shahria.png" alt=""></a>
        <figcaption>
          <h6 class="heading font-x1">Lt Shahria</h6>
          <em class="font-xs">BA-10522 <br> Lt Shifat Shahria</em>
          <footer>
            <ul class="faico clear">
              <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
              <li><a class="faicon-vk" href="#"><i class="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
    </div>
  </section>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row4">
  <footer id="footer" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <div class="one_third first">
      <h6 class="heading">Contact US</h6>
      <form method="post" action="#">
        <fieldset>
          <legend>Newsletter:</legend>
          <input class="btmspace-15" type="text" value="" placeholder="Name">
          <input class="btmspace-15" type="text" value="" placeholder="Email">
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </div>
    <div class="one_third">
      <a name="contacts"></a>
      <ul class="nospace linklist">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="one_third">
      <h6 class="heading">Address</h6>
      <ul class="nospace btmspace-30 linklist contact">
        <li><i class="fa fa-map-marker"></i>
          <address>
          Military Institute of Science & Technology, Mirpur Cantonment,<br> Dhaka-1216
          </address>
        </li>
        <li><i class="fa fa-phone"></i> +880 (176) 951 0451</li>
        <li><i class="fa fa-envelope-o"></i> admin@ams.com</li>
      </ul>
      <ul class="faico clear">
        <li><a class="faicon-facebook" href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a class="faicon-twitter" href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a class="faicon-linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a class="faicon-google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
      </ul>
    </div>
    <!-- ################################################################################################ -->
  </footer>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <p align="center">Copyright &copy; 2021 - All Rights Reserved - <a href="#">Arsenal Maintenance System</a></p>
    <!-- ################################################################################################ -->
  </div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
<!-- JAVASCRIPTS -->
<script src="layout/scripts/jquery.min.js"></script>
<script src="layout/scripts/jquery.backtotop.js"></script>
<script src="layout/scripts/jquery.mobilemenu.js"></script>
</body>
</html>
