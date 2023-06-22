$(document).ready(function(){
    $(".pink, .green, .blue, .orange").click(function(){
        $(this).toggleClass("selected")
    });

    // Смена цвета у товаров
    $(".white").click(function(){
        $(".white").toggleClass("chosen");
        $(".black").toggleClass("chosen");
        if ($(".tovar").hasClass("tovar-black")) {
        $(".tovar").removeClass("tovar-black");
    }
    });
    
    $(".black").click(function(){
        $(".white").toggleClass("chosen");
    $(".black").toggleClass("chosen");
    $(".tovar").toggleClass("tovar-black");
    });

    // Добавление в корзину
    let itemsInCart = 0;
    
    $(".icon").click(function () {
        $(".cart_link h2").text($(".cart_link").text().replace(itemsInCart.toString(), (itemsInCart+ 1).toString()));
        itemsInCart += 1;
    });

    $('.bag-ico').click( function () {
        let rez = $('<div class="popup1">Добавлено!</div>');
        $('#added-bag').append(rez);
        setTimeout( function() { rez.remove(); }, 500);
    });
    
    // Добавление в корзину со страницы товара
    $(".btn-tovar").click(function(){
        $(".ghost-tovar").removeClass("none");
        $(".ghost-tovar").addClass("fly-3");
        setTimeout(function(){
            $('.ghost-tovar').addClass("none");
        }, 2000);
    });

    // Регистрация на мероприятия
    $(".poster-lectures, .poster-karaoke").click(function(){
        $(".forma").removeClass("none")
        });
    $(".cross").click(function(){
        $(".forma").addClass("none")
        });

        $(".button-reg").click(function(){
            $(".forma").addClass("none")
            $(".forma-done").removeClass("none")
            });
            $(".cross-done").click(function(){
                $(".forma-done").addClass("none")
                });
    // Подписка на рассылку, привидение
    $(".mailing-btn").click(function(){
        $(".ghost-afisha").removeClass("none");
        $(".ghost-afisha").addClass("fly");
        setTimeout(function(){
            $('.ghost-afisha').addClass("none");
        }, 2000);
    });

    // Покупка билета, привидение
    $(".btn-ticket").click(function(){
        $(".ghost-ticket").removeClass("none");
        $(".ghost-ticket").addClass("fly-2");
        setTimeout(function(){
            $('.ghost-ticket').addClass("none");
        }, 1500);
    });
});
