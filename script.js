const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC = document.querySelector("#elem-container")
var fixImg = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter",function(){
    fixImg.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixImg.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixImg.style.backgroundImage = `url(${image})`
    })
});


var butt1 = document.querySelector(".fst")
var butt2 = document.querySelector(".snd")
var butt3 = document.querySelector(".thd")
var p1 = document.querySelector(".fist")
var p2 = document.querySelector(".send")
var p3 = document.querySelector(".thid")
var right = document.querySelector(".righty")
var image = butt1.getAttribute("data-image")
right.style.backgroundImage = `url(${image})`

butt1.addEventListener("click",function(){
    butt1.classList.add("click")
    butt2.classList.remove("click")
    butt3.classList.remove("click")
    p1.style.display = "block"
    p2.style.display = "none"
    p3.style.display = "none"
    var image = butt1.getAttribute("data-image")
    right.style.backgroundImage = `url(${image})`
    right.style.animationName = "fadeIn"
    right.style.animationTime = "500ms"
})
butt2.addEventListener("click",function(){
    butt2.classList.add("click")
    butt1.classList.remove("click")
    butt3.classList.remove("click")
    p2.style.display = "block"
    p1.style.display = "none"
    p3.style.display = "none"
    var image = butt2.getAttribute("data-image")
    right.style.backgroundImage = `url(${image})`
    right.style.animationName = "fadeIn"
    right.style.animationTime = "500ms"

})
butt3.addEventListener("click",function(){
    butt3.classList.add("click")
    butt1.classList.remove("click")
    butt2.classList.remove("click")
    p3.style.display = "block"
    p2.style.display = "none"
    p1.style.display = "none"
    var image = butt3.getAttribute("data-image")
    right.style.backgroundImage = `url(${image})`
    right.style.animationName = "fadeIn"
    right.style.animationTime = "500ms"
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
    });
}

swiperAnimation();

var menu = document.querySelector(".menu")
var fullScr = document.querySelector("#full-scr")
fullScr.style.z_index = 99
navImg = document.querySelector("nav img")
var flag = 0;

menu.addEventListener("click",function(){
    if(flag == 0){
        fullScr.style.top = 0;
        navImg.style.opacity = 0;
        fullScr.style.opacity = 1;
        flag = 1;
    }
    else{
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        fullScr.style.opacity = 0;
        flag = 0;
    }
})

var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%";
}, 4000);
