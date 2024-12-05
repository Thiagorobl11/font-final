// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//service section owl carousel
$(".service_owl-carousel").owlCarousel({
    autoplay: true,
    center: true,
    nav: true,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3,
        },
        991: {
            items: 3
        }
    }
});

// owl carousel slider js
var owl = $('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    center: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            center: false,
            items: 1,
            margin: 0
        },
        576: {
            items: 2
        },
        991: {
            center: true,
            items: 3
        }
    }
})


// owl.owlcarousel2_filter

$('.owl-filter-bar').on('click', '.item', function (e) {
    var $items = $('.owl-filter-bar a')
    var $item = $(this);
    var filter = $item.data('owl-filter')
    $items.removeClass("active");
    $item.addClass("active");
    owl.owlcarousel2_filter(filter);

    e.preventDefault();
})
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});
const themeButton = document.getElementById('toggleTheme');
const body = document.body;

// Función para alternar entre los modos oscuro y claro
function toggleTheme() {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeButton.textContent = '🌙'; // Cambiar el ícono a luna para modo oscuro
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeButton.textContent = '☀️'; // Cambiar el ícono a sol para modo claro
  }
}

// Escuchar el clic en el botón
themeButton.addEventListener('click', toggleTheme);

// Al cargar la página, establecer el modo claro por defecto
document.addEventListener('DOMContentLoaded', () => {
  body.classList.add('light-mode');
});
document.addEventListener('DOMContentLoaded', () => {
    alert("conocenos :)");
  });