$(document).ready(function() {

    $('.nav__mobileIcon').click( () => {
        
        const  nav = $('.nav__main');
        const icon = $(".nav__mobile__menu");

        nav.slideToggle(300);

        if(icon.attr("name") === "menu" ){
           icon.removeAttr("name");
           icon.attr("name","close")
        }else {
            icon.removeAttr("name","close")
            icon.attr("name","menu")
        }
        })
    })

