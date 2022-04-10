$(function () {
   // Toggle nav shadow
   $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
         $(".navbar").addClass("floatingNav")
      } else {
         $(".navbar").removeClass("floatingNav")
      }
   })

   // Nav items scroll
   $("a").click(function () {
      var hash = this.hash

      $("html, body").animate(
         {
            scrollTop: $(hash).offset().top - 60,
         },
         800
      )
   })
})
