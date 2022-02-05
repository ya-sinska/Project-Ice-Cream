// const ice = document.querySelector(".hero-info__picture")
// const girl = document.querySelector(".hero-counter__image")

function cirk() {
    cream.classList.add("circle")
}
function leto(){
    ice.classList.add("prili-leto")
    girl.classList.add("prili-girl")
}


const ice = document.querySelector(".hero-info__picture");
const girl = document.querySelector(".hero-counter__image");
const hero = document.querySelector(".hero");
const cream = document.querySelector(".hero-image");
// проверим есть ли такие классы вообще

window.addEventListener("scroll", animScroll2)
function animScroll2 () {
  
    // узнаем высоту объекта
    let animHeight = hero.offsetHeight;
    // получим позицию объекта от верхней линии
    let animOffset = offset(hero).top;
    const animStart = 4;
    // от высоты экрана мы отнимем оббъект деленый на 4
    let animPoint = window.innerHeight - animHeight / animStart;
    // проверим если высота объекта больше чем высота экрана
    if(animHeight > window.innerHeight){
        // в таком случае мы находим просто 4ю часть экрана а не объекта если объект очень длинный
        animPoint = window.innerHeight - window.innerHeight / animStart;
    }
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(( pageYOffset > animOffset - animPoint ) && pageYOffset < (animOffset + animHeight)){
        setTimeout(() =>{
            cirk()
        },1000);
        setTimeout(() =>{
            leto()
        },2500);
    }
    else {
        ice.classList.remove("prili-leto");
        girl.classList.remove("prili-girl");
        cream.classList.remove("circle");
    }
   
   
    function offset (el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}
animScroll2();