$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#navbarElement").removeClass("backgroundNavbar").addClass("bg-white");
    $("#navbarLogo").removeClass("logo-white").addClass("logo-black");
  } else {
    $("#navbarElement").removeClass("bg-white").addClass("backgroundNavbar");
    $("#navbarLogo").removeClass("logo-black").addClass("logo-white");
  }
});

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

