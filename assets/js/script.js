$(function () {
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
