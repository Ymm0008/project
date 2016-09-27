/**
 * Created by feique on 16/9/16.
 */
-function () {
    $(".client").on('mouseenter',function () {
        $(".nav_appDown").css({"display":"block"});
    }).on("mouseleave",function () {
        $(".nav_appDown").fadeOut(600);
    });

    var num=false;
    $(".search .big").on('click',function () {
        if (num==false){
            $(".searBtn").css({
                '-webkit-transform': 'translate(0%)',
                '-moz-transform': 'translate(0%)',
                '-ms-transform': 'translate(0%)',
                '-o-transform': 'translate(0%)',
                'transform': 'translate(0%)'
            });
            num=true;
        }else {
            $(".searBtn").css({
                '-webkit-transform': 'translate(120%)',
                '-moz-transform': 'translate(120%)',
                '-ms-transform': 'translate(120%)',
                '-o-transform': 'translate(120%)',
                'transform': 'translate(120%)'
            });
            num=false;
        }
    });



    $(function(){
        $(".picture li").hover(function(){
            $(this).find("div").fadeOut(700);
        },function(){
            $(this).find("div").fadeIn(700);
        });
    });

    //轮播图
    var timer=window.setInterval(move,1300);
    var step=0;
    function move() {
        if (step>=4) {
            step = 0;
            $(".beautiful ul").css({left: 0});
        }
        step++;
        $(".beautiful ul").animate({left: -step * 670},1000);
        dote(step);

    };
    function dote(a) {
        if(a>=4){
            a=0
        }
        $(".run .dote li").eq(a).addClass('appear').siblings('li').removeClass('appear');
        $(".lf-top .llt").eq(a).animate({opacity:1,zIndex:1},1300);
        $(".lf-top .llt").eq(a).siblings('.llt').animate({opacity:0,zIndex:0},1300);
    };
    $.each($(".dote li"),function (index,item) {
       $(this).click(function () {
           window.clearInterval(timer);
           step=index;
           dote(step);
           $(".beautiful ul").animate({left: -step * 670},800);
           timer=window.setInterval(move,2600)
       })
    });

    //------^^^^





    var olis=$("#nation .img-two li");
    var botlis=$(".org_block .contain .org-list li");
    $.each(olis,function (index,item) {
        $(this).hover(function () {
            $(this).find('span').show(20,function () {
                $(botlis).eq(index).css({backgroundColor:"#ececec"});
            })
        },function () {
            $(this).find('span').hide(20,function () {
                $(botlis).eq(index).css({backgroundColor:""});
            })
        })

    });

    $.each(botlis,function (index,item) {
        $(this).hover(function () {
            $(this).css({backgroundColor:"#ececec"});
            $(olis).eq(index).find('span').show();
        },function () {
            $(this).css({backgroundColor:""});
            $(olis).eq(index).find('span').hide();
        })
    })



}();