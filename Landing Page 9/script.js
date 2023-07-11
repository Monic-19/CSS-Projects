let t1= gsap.timeline({
    delay :1
});

t1
.from(".nav1, .nav2 , .nav3", {
    y : -150
})

.from(".text" , {
    y : "100vh",
    delay : .2
}
)
.from(".line" , {
    y : "100vh"
})

.from(".img1 img",{
    x : -350
},"a")

.from(".img2 img",{
    x : 350
},"a")

.from(".img3 img",{
    x : -550
},"a")

.from(".img4",{
    x : 500
},"a")

.from(".text span" , {
    opacity : 0,
    duration : 1,
    delay : 0.2 
},"a")

.from(".footer", {
    y : 100
},"c")

.to(".footer",{
    y : -60,
    repeat :-1,
    duration : 0.6,
    yoyo : true
},"C")
