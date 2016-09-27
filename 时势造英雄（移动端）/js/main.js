/**
 * Created by feique on 16/9/5.
 */
~function () {
    var goBack=$('#backTop');
    window.onscroll=play;
    function play() {
        var curTop=document.documentElement.scrollTop||document.body.scrollTop;
        var height=document.documentElement.clientHeight||document.body.clientHeight;
        if (curTop >=300){
            $(goBack).css({display:"block"});
        }else{
            $(goBack).css({display:"none"});
        }

        if (curTop>=450){
            if (curTop>=500){
                $("#also").fadeIn(600);
            }else{
                $("#also").fadeOut(300);
            }
            $('#side').css({display:'block'});
        }else {
            $('#side').css({display:"none"});
        }

        $(goBack).on('click',function () {
            function go() {
                var target=0;
                curTop-=100;
                if (curTop<=0){
                    curTop=0;
                    $(goBack).css({display:"none"});
                    window.clearInterval(timer);
                }
                document.documentElement.scrollTop=curTop;
                document.body.scrollTop=curTop;
            }
            var timer=window.setInterval(go,70);
        });
    }
    //  链接地址
    $("header #small .sm_famous").on('click',function () {
        //window.location.href='famous.html';
        location.assign('html/famous.html');
    });
    $("header #small .sm_email").on('click',function () {
        location.assign('html/email.html');
    });
    $("header #small .sm_game").on('click',function () {
        location.assign('html/window.html');
    });
    $("header #small .sm_peo").on('click',function () {
        location.assign('html/landing.html');
    });


    $("#news button").on('click',function () {
        location.assign('html/more.html');
    });
    $("#also .type_map").on('click',function () {
        location.assign('html/map.html');
    });
    $("#also .al_peo").on('click',function () {
        location.assign('html/landing.html');
    });
    $(".type_money").on('click',function () {
        location.assign("html/money.html");
    });
    $(".type_news").on('click',function () {
        location.assign("html/news.html");
    });
    $(".type_tec").on('click',function () {
        location.assign('html/tech.html');
    });



    //链接终止

    $('#side').on('click',function (e) {
        $('#middle').animate({left:'0%'},180);
        $('#flank').animate({left:'0%'},180,function () {

            //  $(".fll_one").animate({left:0},300,function () {
            //      $(".fll_two").animate({left:0},300,function () {
            //          $(".fll_three").animate({left:0},300,function () {
            //              $(".fll_four").animate({left:0},300,function () {
            //                  $(".fll_five").animate({left:0},300);
            //              });
            //          });
            //      });
            //  });

            $("#flank .fl_list li a").css({
                // 'transition-delay': '1.5s',
                '-webkit-transform': 'translateX(0%)',
                '-moz-transform': 'translateX(0%)',
                '-ms-transform': 'translateX(0%)',
                '-o-transform': 'translateX(0%)',
                'transform': 'translateX(0%)'
            });
            $(".fll_two").css({
                'transition-delay': '0.35s'
            });
            $(".fll_three").css({
                'transition-delay': '.5s'
            });
            $(".fll_four").css({
                'transition-delay': '.65s'
            });
            $(".fll_five").css({
                'transition-delay': '.8s'
            });
            $(".fll_one").addClass('bg');

        });
        e.stopPropagation();
    });
    $('#middle').on('click',function () {
        $(this).animate({left:'-100%'},160);
        $('#flank').animate({left:'-50%'},160);
        $("#flank .fl_list li a").css({
            '-webkit-transform': 'translateX(-100%)',
            '-moz-transform': 'translateX(-100%)',
            '-ms-transform': 'translateX(-100%)',
            '-o-transform': 'translateX(-100%)',
            'transform': 'translateX(-100%)'
        });
        $(".fll_two").css({
            'transition-delay': '0.35s'
        });
        $(".fll_three").css({
            'transition-delay': '.5s'
        });
        $(".fll_four").css({
            'transition-delay': '.65s'
        });
        $(".fll_five").css({
            'transition-delay': '.8s'
        });

        $(".fll_one").parent().siblings().children('a').removeClass('bg');

    });

}();