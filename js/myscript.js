jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
    triggerOnce: true,
  });
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  getSortData: {
    name: ".name",
    symbol: ".symbol",
    number: ".number parseInt",
    category: "[data-category]",
    weight: function (itemElem) {
      var weight = $(itemElem).find(".weight").text();
      return parseFloat(weight.replace(/[\(\)]/g, ""));
    },
  },
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find(".number").text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find(".name").text();
    return name.match(/ium$/);
  },
};

// bind filter button click
$("#filters").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$("#sorts").on("click", "button", function () {
  var sortByValue = $(this).attr("data-sort-by");
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});
//isotope js end

//owl carousel
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    autoPlay: true,
  });
});

//scrollspy
$(function () {
  var topoffset = 100; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $(".navbar-nav a").click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - topoffset,
          },
          100
        );
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});

//scroll animation
AOS.init({
  duration: 1000,
});
