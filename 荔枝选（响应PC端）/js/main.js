/**
 * Created by feique on 16/8/23.
 */

(function () {
    function changeBanner(step) {
        $('.imglist a').eq(step).css("zIndex",1).siblings().css("zIndex",0);
        $('.imglist a').eq(step).animate({opacity:1},500,function () {
            $(this).siblings().css("opacity",0)
        });
        $('.numlist li').eq(step).addClass('appear').siblings().removeClass("appear");
    }
    var step=0,interval=3000;
    window.setInterval(move,interval);
    function move() {
        if (step===3){
            step=-1;
        }
        step++;
        changeBanner(step);
    }

    $('.numlist li').on('mouseenter',function () {
        step=$(this).index();
        changeBanner(step);
    });

    // var imglist=$("#box div img");
    // console.log(imglist);
    // for (var i=0;i<imglist.length;i++){
    //     imglist[i].dream=i;
    //     imglist[i].onmouseenter=function () {
    //         $(imglist[this.dream]).addClass('change');
    //     };
    //     imglist[i].onmouseleave=function () {
    //         $(imglist[this.dream]).removeClass('change');
    //     }
    //
    // }


    //关闭展开按钮
    $('#box .more').on('click',function (e) {
        $('#box .more').css({display:"none"});
        $('#box #travel').slideDown(300);
    });
   $('#box #travel .close').on('click',function (e) {
       $("#box #travel").slideUp(200,function () {
           $('#box .more').css({display:"block"})
       });
   });
    




//    768屏幕的侧边栏
    $("#header .logo #xian").on('click',function (e) {
        $('#he_side').animate({left:"0%"},400);
        e.stopPropagation();
    });
    $(document).on('click',function () {
        $('#he_side').animate({left:"-100%"},300);
    })
    
})();