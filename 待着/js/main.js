/**
 * Created by feique on 16/9/12.
 */
+function () {
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

//    轮播图

    function move(step) {
        //window.clearInterval(timer);
        $('#banner .ban').eq(step).css('zIndex',1).siblings('.ban').css({zIndex:0});
        $('#banner .ban').eq(step).animate({opacity:1},700,function () {
            $(this).siblings('.ban').css({opacity:0});
        });
    }
    var step=0;
    var timer=window.setInterval(change,2000);
    // button.onclick = function(){
    //     clearInterval(timer);
    //     setInterval(move(),2000);
    // }
    function change() {
        if (step===0) {
            $(".ban_two .bt_word h1").addClass('animated fadeInDown').css({visibility:'visible'});
            $(".ban_two .bt_word .btw_text p").addClass('animated fadeInLeft').css({visibility:'visible'});
            $(".ban_two .bt_word a").addClass('animated fadeInUp').css({visibility:'visible'});

            $(".ban_six .bt_word h1").removeClass('animated fadeInDown').css({visibility:'hidden'});
            $(".ban_six .bt_word .btw_text p").removeClass('animated fadeInLeft').css({visibility:'hidden'});
            $(".ban_six .bt_word a").removeClass('animated fadeInUp').css({visibility:'hidden'});
        } else if(step===1) {
            $(".ban_three .bt_word h1").addClass('animated fadeInDown').css({visibility:'visible'});
            $(".ban_three .bt_word .btw_text p").addClass('animated fadeInLeft').css({visibility:'visible'});
            $(".ban_three .bt_word a").addClass('animated fadeInUp').css({visibility:'visible'});

            $(".ban_two .bt_word h1").removeClass('animated fadeInDown').css({visibility:'hidden'});
            $(".ban_two .bt_word .btw_text p").removeClass('animated fadeInLeft').css({visibility:'hidden'});
            $(".ban_two .bt_word a").removeClass('animated fadeInUp').css({visibility:'hidden'});
        } else if(step===2) {
            $(".ban_four .bt_word h1").addClass('animated fadeInDown').css({visibility:'visible'});
            $(".ban_four .bt_word .btw_text p").addClass('animated fadeInLeft').css({visibility:'visible'});
            $(".ban_four .bt_word a").addClass('animated fadeInUp').css({visibility:'visible'});

            $(".ban_three .bt_word h1").removeClass('animated fadeInDown').css({visibility:'hidden'});
            $(".ban_three .bt_word .btw_text p").removeClass('animated fadeInLeft').css({visibility:'hidden'});
            $(".ban_three .bt_word a").removeClass('animated fadeInUp').css({visibility:'hidden'});
        } else if(step===3) {
            $(".ban_five .bt_word h1").addClass('animated fadeInDown').css({visibility:'visible'});
            $(".ban_five .bt_word .btw_text p").addClass('animated fadeInLeft').css({visibility:'visible'});
            $(".ban_five .bt_word a").addClass('animated fadeInUp').css({visibility:'visible'});

            $(".ban_four .bt_word h1").removeClass('animated fadeInDown').css({visibility:'hidden'});
            $(".ban_four .bt_word .btw_text p").removeClass('animated fadeInLeft').css({visibility:'hidden'});
            $(".ban_four .bt_word a").removeClass('animated fadeInUp').css({visibility:'hidden'});
        } else if(step===4) {
            $(".ban_six .bt_word h1").addClass('animated fadeInDown').css({visibility:'visible'});
            $(".ban_six .bt_word .btw_text p").addClass('animated fadeInLeft').css({visibility:'visible'});
            $(".ban_six .bt_word a").addClass('animated fadeInUp').css({visibility:'visible'});

            $(".ban_five .bt_word h1").removeClass('animated fadeInDown').css({visibility:'hidden'});
            $(".ban_five .bt_word .btw_text p").removeClass('animated fadeInLeft').css({visibility:'hidden'});
            $(".ban_five .bt_word a").removeClass('animated fadeInUp').css({visibility:'hidden'});

        }else {
            step=-1;
        }
        step++;
        move(step);
    };
    $('.fs_numone .left').on('click',function () {
        step-=1;
        step<0?step=5:null;
        move(step);
    });
    $(".right").on('click',function () {
        change();
    });
    $("#banner").mouseover(function () {
        window.clearInterval(timer);
    }).mouseout(function () {
       timer= window.setInterval(change,2000);
    });
//page  two
    $(".fs_numtwo img").hover(function () {
        $(this).css({ 
            '-webkit-transform': 'scale(1.1,1.1)',
            '-moz-transform': 'scale(1.1,1.1)',
            '-ms-transform': 'scale(1.1,1.1)',
            '-o-transform': 'scale(1.1,1.1)',
            'transform': 'scale(1.1,1.1)'
        });

        var imglist=$(".fs_numtwo .two_top .two_bottom .tb_left .tbl_bot ul li a img");
        var olis=$(".fs_numtwo .two_top .two_bottom .tb_left .tbl_bot ul li");
        for (var i=0;i<imglist.length;i++){
            imglist[i].show=i;
            imglist[i].onmousemove=function () {
                $(olis).eq(this.show).find('p').css({
                    '-webkit-transform': 'translateY(-30px)',
                    '-moz-transform': 'translateY(-30px)',
                    '-ms-transform': 'translateY(-30px)',
                    '-o-transform': 'translateY(-30px)',
                    'transform': 'translateY(-30px)'
                })
            }
        }
    },function () {
        $(this).css({
            '-webkit-transform': 'scale(1,1)',
            '-moz-transform': 'scale(1,1)',
            '-ms-transform': 'scale(1,1)',
            '-o-transform': 'scale(1,1)',
            'transform': 'scale(1,1)'
        });
        $(".fs_numtwo .tbl_bot p").css({
            '-webkit-transform': 'translateY(0px)',
            '-moz-transform': 'translateY(0px)',
            '-ms-transform': 'translateY(0px)',
            '-o-transform': 'translateY(0px)',
            'transform': 'translateY(0px)'
        })
    });

    $(".fs_numtwo .bigImg").hover(function () {
        $(this).find('.thisImg').css({
            '-webkit-transform': 'scale(1.1,1.1)',
            '-moz-transform': 'scale(1.1,1.1)',
            '-ms-transform': 'scale(1.1,1.1)',
            '-o-transform': 'scale(1.1,1.1)',
            'transform': 'scale(1.1,1.1)'
        });
        var imgs=$(".fs_numtwo .two_top .two_bottom .tbl_right .tr_bot ul li a img");
        var olis=$(".fs_numtwo .two_top .two_bottom .tbl_right .tr_bot ul li");
        $.each(olis,function (index,item) {
            $(this).hover(function () {
                $(this).find('p').css({
                    '-webkit-transform': 'translateY(-30px)',
                    '-moz-transform': 'translateY(-30px)',
                    '-ms-transform': 'translateY(-30px)',
                    '-o-transform': 'translateY(-30px)',
                    'transform': 'translateY(-30px)'
                })
            },function () {
                $(this).find('p').css({
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px)',
                    'transform': 'translateY(0px)'
                })
            })
        });

    },function () {
        $(this).find('.thisImg').css({
            '-webkit-transform': 'scale(1,1)',
            '-moz-transform': 'scale(1,1)',
            '-ms-transform': 'scale(1,1)',
            '-o-transform': 'scale(1,1)',
            'transform': 'scale(1,1)'
        });
        $(".fs_numtwo .tr_bot li p").css({
            '-webkit-transform': 'translateY(0px)',
            '-moz-transform': 'translateY(0px)',
            '-ms-transform': 'translateY(0px)',
            '-o-transform': 'translateY(0px)',
            'transform': 'translateY(0px)'
        })
    });
    $.each($(".fs_numthree img"),function (item,index) {
        $(this).hover(function () {
            $(this).css({
                '-webkit-transform': 'scale(1.1,1.1)',
                '-moz-transform': 'scale(1.1,1.1)',
                '-ms-transform': 'scale(1.1,1.1)',
                '-o-transform': 'scale(1.1,1.1)',
                'transform': 'scale(1.1,1.1)'
            });
            $(this).parent().parent('li').find('p').css({
                '-webkit-transform': 'rotateX(360deg)',
                '-moz-transform': 'rotateX(360deg)',
                '-ms-transform': 'rotateX(360deg)',
                '-o-transform': 'rotateX(360deg)',
                'transform': 'rotateX(360deg)',
            })
            
        },function () {
            $(this).css({
                '-webkit-transform': 'scale(1,1)',
                '-moz-transform': 'scale(1,1)',
                '-ms-transform': 'scale(1,1)',
                '-o-transform': 'scale(1,1)',
                'transform': 'scale(1,1)'
            });
            $(this).parent().parent('li').find('p').css({
                '-webkit-transform': 'rotateX(0deg)',
                '-moz-transform': 'rotateX(0deg)',
                '-ms-transform': 'rotateX(0deg)',
                '-o-transform': 'rotateX(0deg)',
                'transform': 'rotateX(0deg)'
            })

        })
    });


}();
