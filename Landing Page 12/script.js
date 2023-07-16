let circle = document.querySelector(".circle");
let frame1 = document.querySelector(".frame1");
let frame2 = document.querySelector(".frame2");
let frame3 = document.querySelector(".frame3");
let main = document.querySelector(".main");
const lerp = (x, y, a) => x * (1 - a) + y * a;
let frames = document.querySelectorAll(".frame");

frames.forEach(frame => {
    console.log(frame)

    frame.addEventListener("mouseover" , (delts) => {

        var dims = frame.getBoundingClientRect();
        // console.log(dims)
    
        const xstart= dims.x;
        const xend= dims.x + dims.width;
    
        let zeroOne = gsap.utils.mapRange(xstart, xend, 0, 1, delts.clientX);
    
        lerp(-50 , 50 ,zeroOne);
        
        gsap.to(circle , {
            scale : 6
        })
    
        gsap.to(frame.children,{
            color : "white",
            duration : 0.3,
            y : "-5vw"
        })
    
        gsap.to(frame.children, {
            x : lerp(-50 , 50 ,zeroOne),
            duration :0.3
        })
    
    });
    
    frame.addEventListener("mouseleave" , (delts) => {
        gsap.to(circle , {
            scale :1
        })
    
        gsap.to(frame.children,{
            color : "black",
            duration : 0.3,
            y : "0vw"
        })
    
        gsap.to(frame.children, {
            x : 0,
            duration :0.3
        })
    });

});

main.addEventListener("mouseover" , (delts) => {
    // console.log(delts)
    // console.log(delts.clientX + " & " + delts.clientY)

    gsap.to(circle , {
        x : delts.clientX,
        y : delts.clientY,
        duration : 0.2,
        ease :Expo
    })

}) ;

