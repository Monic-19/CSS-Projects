const scroll = new LocomotiveScroll({
    el: document.querySelector('.div'),
    smooth: true
});

var tl = gsap.timeline();

tl.to(".page1", {
    y : "100vh",
    duration : 0,
    scale : 0.6
})

tl.to(".page1", {
    y : "30vh",
    duration : 1,
    delay :1
})

tl.to(".page1", {
    rotate : -720,
    scale :1,
    y : "0vh",
    duration : 1
})


