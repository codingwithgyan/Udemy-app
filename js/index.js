window.addEventListener("load",function(){
    var swiper1 = new Swiper(".mySwiper1", {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 3000
          },freeMode: {
            enabled: true,
            sticky: true,
          }
      });
      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });  
    
});
