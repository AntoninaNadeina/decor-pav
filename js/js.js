jQuery(document).ready(function () {
    jQuery('.sr-popup img').click(
        function () {
            jQuery('#search-form').animate({opacity: 'show'}, 300);
        });

    $('.plus').click(function(){
        $('.popup').animate({opacity:'show'}, 500);
    });
    $('.minus').click(function(){
        $('.popup').animate({opacity:'hide'}, 500);
    });

    $(function() {
        var newSelection = "";
        $(".room ul li input").click(function(){
            $(".gallery").fadeTo(200, 0.10);
            $(".room ul li input").removeClass("selected");
            $(this).addClass("selected");
            newSelection = $(this).attr("rel");
            $(".article").not("."+newSelection).slideUp();
            $("."+newSelection).slideDown();
            $(".gallery").fadeTo(600, 1);
        });
    });

    $('.menu-button').click(function(){
        if($(this).hasClass('active')){
            $('.top-menu ul').slideUp();
            $(this).removeClass('active');
        } else {
            $('.top-menu ul').slideDown();
            $(this).addClass('active');
        }
    });

    $('.cat-button').click(function(){
        if($(this).hasClass('active')){
            $('.down-menu_small ul').slideUp();
            $(this).removeClass('active');
        } else {
            $('.down-menu_small ul').slideDown();
            $(this).addClass('active');
        }
    });

    $('.button-filter').click(function(){
        if($(this).hasClass('active')){
            $('.room ul').slideUp();
            $(this).removeClass('active');
        } else {
            $('.room ul').slideDown();
            $(this).addClass('active');
        }
    });

});
