let animItems = document.querySelectorAll("._anim-transform");
// проверим есть ли такие классы вообще
if (animItems.length > 0){
    window.addEventListener("scroll", animScroll)
    function animScroll () {
        
        for (let index = 0; index < animItems.length; index++) {
            // пишем в переменную объект над которым будем проводить расчеты
            let anim = animItems[index];
            // узнаем высоту объекта
            let animHeight = anim.offsetHeight;
            // получим позицию объекта от верхней линии
            let animOffset = offset(anim).top;
            const animStart = 6;
            // от высоты экрана мы отнимем оббъект деленый на 4
            let animPoint = window.innerHeight - animHeight / animStart;
            // проверим если высота объекта больше чем высота экрана
            if(animHeight > window.innerHeight){
                // в таком случае мы находим просто 4ю часть экрана а не объекта если объект очень длинный
                animPoint = window.innerHeight - window.innerHeight / animStart;
            }
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if(( pageYOffset > animOffset - animPoint ) && pageYOffset < (animOffset + animHeight)){
                anim.classList.add("_bomba");
            }
            else {
                anim.classList.remove("_bomba");
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animScroll();
}