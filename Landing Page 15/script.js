
function time(){
    var a =0;
    let b=setInterval( () => {
        a=a+ Math.floor((Math.random() * a) + 1);
        if(a>=100) {
            clearInterval(b)
            a=100;
        }
        document.querySelector(".loader h1").innerHTML = `${a}%`; 
        console.log(a)
    },150 )
}

 var tl = gsap.timeline();

tl.to(".loader h1",{
    duration :1 ,
    delay :2,
    onStart : time(),
    scale : 1.5,

})

tl.to(".loader",{
    top : "-100vh",
    delay : 0.2, 
    duration :1,
})

gsap.to( ".page1 h1" ,{
    transform : "translateX(-190%)",
    fontWeight : "100",

    scrollTrigger : {
        // markers : true, 
        trigger : ".page1",
        scroller : "body",
        start : "top 0%",
        end : "top -200%",
        scrub : true ,
        pin : true,
    }
})