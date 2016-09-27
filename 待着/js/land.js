/**
 * Created by feique on 16/9/17.
 */
!function () {

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
}();