$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#navbarElement').removeClass('backgroundNavbar').addClass('bg-white');
  } else {
    $('#navbarElement').removeClass('bg-white').addClass('backgroundNavbar');
  }
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#navbarLogo').removeClass('logo-white').addClass('logo-black');
  } else {
    $('#navbarLogo').removeClass('logo-black').addClass('logo-white');
  }
});

