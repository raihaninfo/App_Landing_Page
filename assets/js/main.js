$(document).ready(function () {
    // navbar sharink
    $(window).on("scroll",function(){
        if($(this).scrollTop()>90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });



    // popup video
    const videoSrc = $("#plear-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#plear-1").attr("src", "")
        }
        else{
            $(".video-popup").addClass("open");
            if($("#plear-1").attr("src")==''){
                $("#plear-1").attr("src", videoSrc);
            }
        }
    });
            // feature carousel
    $('.feature-corosel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
            }
    });
    // screenshort carousel
    $('.screenshort-crosel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
            }
            }
    });
});