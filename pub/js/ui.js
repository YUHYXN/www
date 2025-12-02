$(function(){
    // PC에서만
    function setGnbHover() {
        if ($(window).width() >= 1229) {
            $(".header_area").off("mouseenter mouseleave")
            .on("mouseenter", function(){
                $(this).parent().addClass("hover");
            })
            .on("mouseleave", function(){
                $(this).parent().removeClass("hover");
            });
        } else {
            $(".header_area").off("mouseenter mouseleave").parent().removeClass("hover");
        }
    }

    setGnbHover();
    $(window).on("resize", setGnbHover);

    $(".lang_box .lang_btn").click(function(e){
        e.preventDefault();
        $(".lang_box .lang_list").toggle();
        e.stopPropagation();
    });

    
    $(".lang_list a , .lnb_util .lang a").on("click", function(e){
        $(this).parent().addClass("selected").siblings().removeClass("selected");
    });
    $(document).on("click", function(){
        $(".lang_box").removeClass("open");
        $(".lang_box .lang_list").hide();
    });

    $(".btn_menu").on("click", function(){
        $(".lnb_wrap").addClass("open");
        $("body").css("overflow", "hidden");
    });

    $(".lnb_wrap .btn_close").on("click", function(){
        $(".lnb_wrap").removeClass("open");
        $("body").css("overflow", "auto");
    });
    $(".depth1 .toggle_tit").on("click", function(){
        var $parentLi = $(this).parent();  
        $parentLi.toggleClass("active")
    }); 
})