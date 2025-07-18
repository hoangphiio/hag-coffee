//------------------------------ Menu Header ------------------------------
$(document).ready(function () {
  let width = $(window).width();

  if (width < 1201) {
    $(".js-child0, .js-child1").hide(``);

    $(".js-dropdown").click(function (e) {
      e.stopPropagation();

      let childDropdowns = $(this).children(".js-child0, .js-child1");

      if ($(this).hasClass("is-active")) {
        childDropdowns.stop().slideUp();
        $(this).removeClass("is-active");
      } else {
        childDropdowns.stop().slideDown();
        $(this).addClass("is-active");
      }
    });

    $(document).click(function (e) {
      if (!$(e.target).closest(".js-dropdown").length) {
        $(".js-child0, .js-child1").slideUp();
        $(".js-dropdown").removeClass("is-active");
      }
    });

    $(".js-bar").click(function () {
      $(this).toggleClass("is-active");
      $(".js-menu, .overlay").toggleClass("is-active");

      if ($(this).hasClass("is-active")) {
        $(".main").off("touchmove");
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "unset");
      }
    });

    $(".overlay, .menu-close-icon").click(closeMenu);

    function closeMenu() {
      $(".js-bar, .js-menu, .overlay").removeClass("is-active");
      $("body").css("overflow", "unset");

      $(".js-child0, .js-child1").slideUp();
      $(".js-dropdown").removeClass("is-active");
    }
  }
});

// Onscroll
$(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    if ($(".js-header").length) {
      $(".js-header").addClass("is-fixed");
    }
  } else {
    if ($(".js-header").length) {
      $(".js-header").removeClass("is-fixed");
    }
  }
});

//------------------------------ Toogle Search ------------------------------
$(document).ready(function () {
  // Function to toggle active class
  function toggleActiveClass(element) {
    element.toggleClass("is-active");
  }
  $("body").click(function (e) {
    if (!$(e.target).closest(".js-menu-search").length) {
      $(".js-menu-search").removeClass("is-active");
    }
  });

  // Search
  $(".js-menu-search .search").click(function (e) {
    toggleActiveClass($(this).parents(".js-menu-search"));
  });
});

//------------------------------ Toogle Search ------------------------------
if ($(".product-detail-splide").length) {
  const productdt_swiper = document.querySelectorAll(".product-detail-splide");
  productdt_swiper.forEach((item, i) => {
    const swiperMain = item.querySelector(".js-gallery");
    const swiperThumb = item.querySelector(".js-thumbs");

    const itemImg = new Swiper(swiperThumb, {
      speed: 800,
      slidesPerView: "auto",
    });

    const itemMain = new Swiper(swiperMain, {
      speed: 800,
      effect: "slide",
      grabCursor: true,
      slidesPerView: "auto",
      thumbs: { swiper: itemImg },
      fadeEffect: { crossFade: true },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
}
