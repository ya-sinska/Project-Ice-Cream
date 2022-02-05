$(document).ready(function(){
    $(".yacor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// $(document).on("click", ".mobile-menu__link", function(){

//     $(".mobile-menu__link").closest(".mobile-menu__list list").removeClass("is-open").hide();
// });