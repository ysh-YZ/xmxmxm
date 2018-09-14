$(function() {
//    购物车
    let right_right=$(".right_right:first");
    console.log(right_right);
    let cart_hide=$(".cart_hide:first");
    console.log(cart_hide);
    right_right.hover(function (){

        cart_hide.css("height","97px");
        cart_hide.css("boxShadow","0 6px 15px 2px rgba(0,0,0,0.1)");
    },function (){
        cart_hide.css("height","0px");
        cart_hide.css("boxShadow","none");
    })
//    购物车
    //    轮播图
    let banner = $(".banner:first");
    let imgli = $(".imgBox li");
    console.log(imgli);
    let circle = $(".circleBtn div");
    console.log(circle);
    let leftBtn = $(".leftBtn:first");
    let rightBtn = $(".rightBtn:first");
    console.log(leftBtn, rightBtn);
    let num = 0;
    //1：给大的屏幕加入自我的移动
    let t = setInterval(move, 1000);
    banner.hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(move, 1000);
    });
    //2：给大的屏幕加入自我的移动所用函数
    //向右
    function move(type = "rightBtn") {
        if (type = "rightBtn") {
            num++;
        if (num >= imgli.length) {
            num = 0;
        }
        }
        else if (type = "leftBtn") {
            num--;

        if (num < 0) {
            num = imgli.length - 1;
        }
        }
        imgli.css("z-index", "5").eq(num).css("z-index", "10");
        circle.removeClass("change").eq(num).addClass("change");
    }
    //左右按钮调用左右移动函数
    rightBtn.click(function(){
        move("rightBtn");
    })
    leftBtn.click(function(){
        move("leftBtn");
    })
    //左右按钮
    circle.click(function () {
        imgli.css("z-index", "5").eq($(this).index()).css("z-index", "10");
        circle.removeClass("change").eq($(this).index()).addClass("change");
    });
//头部导航
    let nav=$(".nav_box .nav");
    console.log(nav);
    let lili=$(".nav_box .nav .lili");
    console.log(lili);
    let nav_hide=$(".nav_box .nav_hide");
    console.log(nav_hide);
    let nav_hide_in=$(".nav_box .nav_hide_in");

    nav.hover(function () {
        nav_hide.css("height","252px");
    },function () {
        nav_hide.css("height","0px");
    })

    lili.hover(function () {
        nav_hide_in.eq($(this).index()).fadeToggle(100,"linear");
        // nav_hide_in.css("display","none").eq($(this).index()).css("display","block");
    },function () {
        nav_hide_in.css("display","none");
    })
    //头部导航
// 头部导航
//导航左边选择项
    let aside_hide=$(".aside_hide");
    // let aside=$(".aside");
    let lis=$(".aside:first .lis");
    console.log(lis);
    lis.hover(function () {
        aside_hide.css("display","none").eq($(this).index()).css("display","block");
    },function () {
        aside_hide.css("display","none");
    });

    //导航左边选择项












});