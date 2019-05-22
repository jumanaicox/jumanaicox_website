$("header a").on("click", function() {
$("html,body").animate({scrollTop: $(".about").offset().top - 140},800);
});

$(window).on("scroll", function() {

let distanceScrolled = $(window).scrollTop();
console.log(distanceScrolled);

if (distanceScrolled >=656) {
  $("nav").fadeIn(200);
} else $("nav").fadeOut(200);

if (distanceScrolled <=656) {
  $(".nav-device").fadeOut();
}

if (distanceScrolled >=550) {
  $(".about-img").addClass("about-img-animate");
} else $(".about-img").removeClass("about-img-animate");

if (distanceScrolled >=750) {
  $(".about-p").addClass("about-p-animate");
} else $(".about-p").removeClass("about-p-animate");

if (distanceScrolled >=1300) {
  $(".wrap").addClass("wrap-animate");
} else $(".wrap").removeClass("wrap-animate");

if (distanceScrolled >=1420) {
  $(".rectangle").addClass("rectangle-animate");
} else $(".rectangle").removeClass("rectangle-animate");

if (distanceScrolled >= 2600) {
  $(".flex-container").addClass("flex-container-animate");
} else $(".flex-container").removeClass("flex-container-animate");
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".nav-device").slideToggle("300");
        $(".hamburger").toggleClass("hamburger-animate");
    });
});

// Create a smooth scroll using the name attribute!
$('a[href^="#"]').click(function () {
    // use the animate method with scroll top to create an animation
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 140
    }, 800);

    return false;
});

$('form').on('submit', function(event) {
  event.preventDefault();

});
