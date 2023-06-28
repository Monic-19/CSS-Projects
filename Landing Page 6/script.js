gsap.from(".img1", {
    opacity: 0,
    delay: .5,
    duration: 1,
    x: -60
})


gsap.from(".img2", {
    opacity: 0,
    delay: .7,
    duration: 2,
    y: -60
})

gsap.from(".img3", {
    opacity: 0,
    delay: .9,
    duration: 3,
    y: 60
})

gsap.from(".center-text", {
    opacity: 0,
    delay: .4,
    duration: 4,

})

gsap.from(".page2 h5 ,.page2 h1 ,.page2 .about-us", {
    opacity: 0,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".page2 h5",
        scroller: 'body',
        // markers: true,
        start: "top 60%",
        toggleActions: "restart none none reverse"
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


