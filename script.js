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
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-categoria").slick({
    centerMode: true,
  centerPadding: '150px',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        autoplay:true,
        centerPadding: '70px',
        slidesToShow: 1
      }
    }
  ],
  });
});
