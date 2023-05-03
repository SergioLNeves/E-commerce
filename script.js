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

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  $('.slider').slick();
});