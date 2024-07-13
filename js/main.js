(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

  // JavaScript to toggle editable mode
  document.getElementById("edit-button").addEventListener("click", function() {
    var overview = document.querySelector('.highlights');
    overview.classList.toggle('editable');
    var spans = overview.querySelectorAll('span');
    spans.forEach(function(span) {
      var text = span.textContent;
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('value', text);
      span.replaceWith(input);
    });
  });

  //Review
  function toggleReviewSection() {
    var checkBox = document.getElementById("showReviewSection");
    var reviewSection = document.getElementById("reviewSection");
    reviewSection.style.display = checkBox.checked ? "block" : "none";
}

//Package Information button
document.getElementById("confirm-booking").addEventListener("click", function() {
    window.location.href = "accounts.html";
  });

  //Updated JAVASCRIPT for Web App