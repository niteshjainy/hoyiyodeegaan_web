/*on scroll add class to header*/
$(document).ready(function() {
    $("#log").click(function(){
        $("#signup").hide();
        $("#login").show();
    });
    $("#Sign").click(function(){
        $("#login").hide();
        $("#signup").show();
    });

    $(window).scroll(function() {

      if($(this).scrollTop() > 80) { 
          $('.navbar').addClass('on-scroll');
      } else {
          $('.navbar').removeClass('on-scroll');
      }
    });

  });
$('#owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 3,
        responsive: {
           0: {
              items: 1
            },

            700: {
              items: 1
            },
            767: {
              items: 2
            },
            1024: {
              items: 3
            },

            1366: {
              items: 3
            }
         }
})
$('#testimonial').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        items: 2,
         responsive: {
            0: {
              items: 1
            },

            700: {
              items: 1
            },
            767: {
              items: 2
            },
            1024: {
              items: 3
            },

            1366: {
              items: 3
            }
         }
})
$('#owl-carousel14').owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: true,
        items: 3,
})

/*acccordion*/
$(function () {

  $(".accordion-content:not(:first-of-type)").css("display", "none");

  $(".js-accordion-title:first-of-type").addClass("open");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});


    
(function($) {
    $(document).ready(function() {
        $('#priceRange3').each(function() {
            var slidervalue = $(this).attr('data-slider-value');
            var separator = slidervalue.indexOf(',');
            if (separator !== -1) {
                slidervalue = slidervalue.split(',');
                slidervalue.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                slidervalue = parseFloat(slidervalue);
            }


            $(this).slider({
                formatter: function(slidervalue) {
                    return '' + slidervalue;
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: slidervalue,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip'),
                tooltip_position: 'bottom'
            });


            $("#priceRange3").on('change', function() {
                var maxvalue = $(".tooltip-max .tooltip-inner").text().replace(/\$/g, "");
                maxparse = parseInt(maxvalue);
                minvalue = $(".tooltip-min .tooltip-inner").text().replace(/\$/g, "");
                minparse = parseInt(minvalue);
                switch (true) {
                    case (maxparse < $('#range1').attr('data-range')):
                        $('#range1').prop('checked', true);
                        $('#range2, #range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range2').attr('data-range')):
                        $('#range1, #range2').prop('checked', true);
                        $('#range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range3').attr('data-range')):
                        $('#range1, #range2, #range3').prop('checked', true);
                        $('#range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range4').attr('data-range')):
                        $('#range1, #range2, #range3, #range4').prop('checked', true);
                        $('#range5').prop('checked', false);
                        break;
                    case (maxparse == $('#range5').attr('data-range')):
                        $('#range1, #range2, #range3, #range4, #range5').prop('checked', true);
                        break;
                        $('#range1').prop('checked', true);
                }

                if (minparse > $('#range1').attr('data-range')) {
                    $('#range1').prop('checked', false);
                }
                if (minparse >= $('#range2').attr('data-range')) {
                    $('#range1, #range2').prop('checked', false);
                }
                if (minparse >= $('#range3').attr('data-range')) {
                    $('#range1, #range2, #range3').prop('checked', false);
                }
                if (minparse >= $('#range4').attr('data-range')) {
                    $('#range1, #range2, #range3, #range4').prop('checked', false);
                }

            });


            //Onchange function checkbox on/off

        });


       

    });



})(jQuery);


/*slider2*/

/*Slider range1*/

(function($) {
    $(document).ready(function() {
        $('#priceRange').each(function() {
            var slidervalue = $(this).attr('data-slider-value');
            var separator = slidervalue.indexOf(',');
            if (separator !== -1) {
                slidervalue = slidervalue.split(',');
                slidervalue.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                slidervalue = parseFloat(slidervalue);
            }


            $(this).slider({
                formatter: function(slidervalue) {
                    return '' + slidervalue;
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: slidervalue,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip'),
                tooltip_position: 'bottom'
            });


            $("#priceRange").on('change', function() {
                var maxvalue = $(".tooltip-max .tooltip-inner").text().replace(/\$/g, "");
                maxparse = parseInt(maxvalue);
                minvalue = $(".tooltip-min .tooltip-inner").text().replace(/\$/g, "");
                minparse = parseInt(minvalue);
                switch (true) {
                    case (maxparse < $('#range1').attr('data-range')):
                        $('#range1').prop('checked', true);
                        $('#range2, #range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range2').attr('data-range')):
                        $('#range1, #range2').prop('checked', true);
                        $('#range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range3').attr('data-range')):
                        $('#range1, #range2, #range3').prop('checked', true);
                        $('#range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range4').attr('data-range')):
                        $('#range1, #range2, #range3, #range4').prop('checked', true);
                        $('#range5').prop('checked', false);
                        break;
                    case (maxparse == $('#range5').attr('data-range')):
                        $('#range1, #range2, #range3, #range4, #range5').prop('checked', true);
                        break;
                        $('#range1').prop('checked', true);
                }

                if (minparse > $('#range1').attr('data-range')) {
                    $('#range1').prop('checked', false);
                }
                if (minparse >= $('#range2').attr('data-range')) {
                    $('#range1, #range2').prop('checked', false);
                }
                if (minparse >= $('#range3').attr('data-range')) {
                    $('#range1, #range2, #range3').prop('checked', false);
                }
                if (minparse >= $('#range4').attr('data-range')) {
                    $('#range1, #range2, #range3, #range4').prop('checked', false);
                }

            });


            //Onchange function checkbox on/off

        });


       

    });



})(jQuery);


/*slider2*/

     (function($) {
    $(document).ready(function() {
        $('#priceRange1').each(function() {
            var slidervalue = $(this).attr('data-slider-value');
            var separator = slidervalue.indexOf(',');
            if (separator !== -1) {
                slidervalue = slidervalue.split(',');
                slidervalue.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                slidervalue = parseFloat(slidervalue);
            }


            $(this).slider({
                formatter: function(slidervalue) {
                    return '' + slidervalue;
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: slidervalue,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip'),
                tooltip_position: 'bottom'
            });


            $("#priceRange1").on('change', function() {
                var maxvalue = $(".tooltip-max .tooltip-inner").text().replace(/\$/g, "");
                maxparse = parseInt(maxvalue);
                minvalue = $(".tooltip-min .tooltip-inner").text().replace(/\$/g, "");
                minparse = parseInt(minvalue);
                switch (true) {
                    case (maxparse < $('#range1').attr('data-range')):
                        $('#range1').prop('checked', true);
                        $('#range2, #range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range2').attr('data-range')):
                        $('#range1, #range2').prop('checked', true);
                        $('#range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range3').attr('data-range')):
                        $('#range1, #range2, #range3').prop('checked', true);
                        $('#range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range4').attr('data-range')):
                        $('#range1, #range2, #range3, #range4').prop('checked', true);
                        $('#range5').prop('checked', false);
                        break;
                    case (maxparse == $('#range5').attr('data-range')):
                        $('#range1, #range2, #range3, #range4, #range5').prop('checked', true);
                        break;
                        $('#range1').prop('checked', true);
                }

                if (minparse > $('#range1').attr('data-range')) {
                    $('#range1').prop('checked', false);
                }
                if (minparse >= $('#range2').attr('data-range')) {
                    $('#range1, #range2').prop('checked', false);
                }
                if (minparse >= $('#range3').attr('data-range')) {
                    $('#range1, #range2, #range3').prop('checked', false);
                }
                if (minparse >= $('#range4').attr('data-range')) {
                    $('#range1, #range2, #range3, #range4').prop('checked', false);
                }

            });


            //Onchange function checkbox on/off

        });


       

    });



})(jQuery);
$("#deskmenu").click(function(){
  $(".togglediv").toggle();
});

$(document).ready(function() {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false, margin: 30,
    nav: false,
    responsive: {
           0: {
              items: 2
            },

            700: {
              items: 2
            },
            767: {
              items: 2
            },
            1024: {
              items: 4
            },

            1366: {
              items: 4
            }
         },
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar =150;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "View..";
    var lesstext = "View less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


if (window.matchMedia('(max-width: 640px)').matches) {
    $(document).ready(function () {
        $('h5.click').click(function () {
            $(this).find(".arrow").toggleClass('rotate');
            $(this).find(".arrow").toggleClass('rotate-reset');
           /* $('h5.click').next('ul').slideUp();*/
            $(this).next('ul').slideToggle();
            return false; 

        });
    });
}