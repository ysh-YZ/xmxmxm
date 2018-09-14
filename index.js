window.onload=function (){
// 购物车选择项
let right_right=document.getElementsByClassName("right_right")[0];
let cart_hide=document.getElementsByClassName("cart_hide")[0];
    right_right.onmouseenter=function () {

        cart_hide.style.height="97px";
        cart_hide.style.boxShadow="0 6px 15px 2px rgba(0,0,0,0.1)";
    }
    right_right.onmouseleave=function () {
        cart_hide.style.height="0";
        cart_hide.style.boxShadow="none";
    }
//导航左边选择项
    let aside_hide=document.getElementsByClassName("aside_hide");
    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByClassName("lis");
        for (let i=0;i<lis.length;i++){
            lis[i].onmouseenter=function () {
                aside_hide[i].style.display="block";
            }
            lis[i].onmouseleave=function () {
                aside_hide[i].style.display="none";
            }
        }
//家电选项卡
        let household=document.getElementsByClassName("household")[0];
        let more=household.getElementsByClassName("more")[0];
        let lists=more.getElementsByTagName("span");
        let house_hide=household.getElementsByClassName("house_hide");
        // console.log(household, more, lists,house_hide);
        for(let i=0;i<lists.length;i++){
            lists[i].onmouseenter=function () {
                for (let j=0;j<lists.length;j++){
                    house_hide[j].style.zIndex="5";
                }
                house_hide[i].style.zIndex="10";
            }
        }
    let household1=document.getElementsByClassName("household")[1];
    let more1=household1.getElementsByClassName("more")[0];
    let lists1=more1.getElementsByTagName("span");
    console.log(household1,more1,lists1);
    let house_hide1=household1.getElementsByClassName("house_hide");
    for(let i=0;i<lists1.length;i++){
        lists1[i].onmouseenter=function () {
            for (let j=0;j<lists1.length;j++){
                house_hide1[j].style.zIndex="5";
            }
            house_hide1[i].style.zIndex="10";
        }
    }
    let household2=document.getElementsByClassName("household")[2];
    let more2=household2.getElementsByClassName("more")[0];
    let lists2=more2.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide2=household2.getElementsByClassName("house_hide");
    for(let i=0;i<lists2.length;i++){
        lists2[i].onmouseenter=function () {
            for (let j=0;j<lists2.length;j++){
                house_hide2[j].style.zIndex="5";
            }
            house_hide2[i].style.zIndex="10";
        }
    }
    let household3=document.getElementsByClassName("household")[3];
    let more3=household3.getElementsByClassName("more")[0];
    let lists3=more3.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide3=household3.getElementsByClassName("house_hide");
    for(let i=0;i<lists3.length;i++){
        lists3[i].onmouseenter=function () {
            for (let j=0;j<lists3.length;j++){
                house_hide3[j].style.zIndex="5";
            }
            house_hide3[i].style.zIndex="10";
        }
    }
    let household4=document.getElementsByClassName("household")[4];
    let more4=household4.getElementsByClassName("more")[0];
    let lists4=more4.getElementsByTagName("span");
    // console.log(household1,more1,lists1);
    let house_hide4=household4.getElementsByClassName("house_hide");
    for(let i=0;i<lists4.length;i++){
        lists4[i].onmouseenter=function () {
            for (let j=0;j<lists4.length;j++){
                house_hide4[j].style.zIndex="5";
            }
            house_hide4[i].style.zIndex="10";
        }
    }
//////////////////////////////////////轮播图1///////////////////////////////////////////
    let banner=document.getElementsByClassName("banner")[0];
    let imgBox=banner.getElementsByClassName("imgBox")[0];
    let imgli=imgBox.getElementsByTagName("li");
    // console.log(banner, imgBox, lises);
    let circleBtn=banner.getElementsByClassName("circleBtn")[0];
    let circle=circleBtn.getElementsByTagName("div");
    console.log(circleBtn, circle);
    let leftBtn=document.getElementsByClassName("leftBtn")[0];
    let rightBtn=document.getElementsByClassName("rightBtn")[0];
    // console.log(leftBtn, rightBtn);
    let num=0;
    //1：给大的屏幕加入自我的移动
    let t=setInterval(move,1000);
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,1000);
    }
    //2：给大的屏幕加入自我的移动所用函数
    //向右
    function move() {
        num++;
        if(num==imgli.length){
            num=0;
        }
        for(let i=0;i<imgli.length;i++){
            imgli[i].style.zIndex="5";
            circle[i].className="";
        }
        imgli[num].style.zIndex="10";
        circle[num].className="change";

    }
    //向左
    function movel() {
        num--;
        if(num<0){
            num=imgli.length-1;
        }
        for(let i=0;i<imgli.length;i++){
            imgli[i].style.zIndex="5";
            circle[i].className="";
        }
        imgli[num].style.zIndex="10";
        circle[num].className="change";
    }
    //左右按钮调用左右移动函数
    rightBtn.onclick=function(){
        move();
    }
    leftBtn.onclick=function(){
        movel();
    }
    //左右按钮
    // 五个圆点点击后转换图片
    for (let i=0;i<circle.length;i++){
        circle[i].onclick=function () {
               for(let j=0;j<imgli.length;j++){
            imgli[j].style.zIndex="5";
            circle[j].className="";
        }
            imgli[i].style.zIndex="10";
            circle[i].className="change";
             num=i;
        }
    }
/////////////////////////////////////内容轮播图////////////////////////////////////////////
    //    1
    let wheel=document.querySelectorAll(".nr1 .wheel_nr div");
    // console.log(wheel);
    let leftBtn11=document.querySelector(".bottom .nr1 .leftBtn");
    let rightBtn11=document.querySelector(".bottom .nr1 .rightBtn");
    let content_hide=document.querySelectorAll(".bottom .nr1 .content_hide");
    console.log(content_hide);
    //1
    //2
    let wheel1=document.querySelectorAll(".nr2 .wheel_nr div");
    // console.log(wheel);
    let leftBtn111=document.querySelector(".bottom .nr2 .leftBtn");
    let rightBtn111=document.querySelector(".bottom .nr2 .rightBtn");
    let content_hide1=document.querySelectorAll(".bottom .nr2 .content_hide");
    console.log(content_hide1);
    //2
    //3
    let wheel11=document.querySelectorAll(".nr3 .wheel_nr div");
    // console.log(wheel);
    let leftBtn1111=document.querySelector(".bottom .nr3 .leftBtn");
    let rightBtn1111=document.querySelector(".bottom .nr3 .rightBtn");
    let content_hide11=document.querySelectorAll(".bottom .nr3 .content_hide");
    console.log(content_hide11);
    //3
    //4
    let wheel111=document.querySelectorAll(".nr4 .wheel_nr div");
    // console.log(wheel);
    let leftBtn11111=document.querySelector(".bottom .nr4 .leftBtn");
    let rightBtn11111=document.querySelector(".bottom .nr4 .rightBtn");
    let content_hide111=document.querySelectorAll(".bottom .nr4 .content_hide");
    console.log(content_hide111);
    //4
    function fn(leftflage,rightflage,yuanflage,hide_flage) {

    let now=next=0;
    let flag=true;
    // setInterval(movel,1000);
    //左右按钮点击
        rightflage.onclick=function(){
        //点击到最后一个停止
        if(next==hide_flage.length-1){
            next=hide_flage.length-1;
            return;
            //    满足以上条件句就不执行下面的函数
        }
        if(flag==false){
            return;
        }
        flag==false;
           move();
    }
        leftflage.onclick=function () {
        if(next==0){
            return;
        }
        if(flag==false){
            return;
        }
        flag==false;
           movel();
    }
    //右移动函数
    function move() {
        next++;
        if(next==hide_flage.length){
            next=0;
        }
        hide_flage[next].style.left="296px";
        animate(hide_flage[now],{left:-296},function () {
            flag=true;
        });
        animate(hide_flage[next],{left:0});
        yuanflage[now].classList.remove("wheel_hot");
        yuanflage[next].classList.add("wheel_hot");
        now=next;
    }
//    左移动函数
    function movel() {
        next--;
        if(next<0){
            next=hide_flage.length-1;
        }
        hide_flage[next].style.left="-296px";
        animate(hide_flage[now],{left:296},function () {
            flag=true;
        });
        animate(hide_flage[next],{left:0});
        yuanflage[now].classList.remove("wheel_hot");
        yuanflage[next].classList.add("wheel_hot");
        now=next;
    }
    // 小园点击
    for (let i=0;i<yuanflage.length;i++){
        yuanflage[i].onclick=function () {
            if(now==i){
                return;
            }else if(now<i){
                hide_flage[i].style.left="296px";
                animate(hide_flage[now],{left:-296});
                animate(hide_flage[i],{left:0});
                yuanflage[now].classList.remove("wheel_hot");
                yuanflage[i].classList.add("wheel_hot");
            }else {
                hide_flage[i].style.left="-296px";
                animate(hide_flage[now],{left:296});
                animate(hide_flage[i],{left:0});
                yuanflage[now].classList.remove("wheel_hot");
                yuanflage[i].classList.add("wheel_hot");
            }
            next=now=i;
        }

    }
}
    fn(leftBtn11,rightBtn11,wheel,content_hide);
    fn(leftBtn111,rightBtn111,wheel1,content_hide1);
    fn(leftBtn1111,rightBtn1111,wheel11,content_hide11);
    fn(leftBtn11111,rightBtn11111,wheel111,content_hide111);
    ///////////////////////////头部选项卡////////////////////////////////////
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

    ///////////////////////////头部选项卡////////////////////////////////////
    ///////////////////////////为你推荐//////////////////////////////////////
let bottom_hide_box=document.querySelector(".recom .bottom_hide_box");
    console.log(bottom_hide_box);
    let right_left_btn=document.querySelector(".recom .right_left");
    console.log(right_left_btn);
    let right_right_btn=document.querySelector(".recom .right_right");
    console.log(right_right_btn);
    let times=0;
    let widths=parseInt(getComputedStyle(bottom_hide_box,null).width)/3;
    right_right_btn.onclick=function () {
        times++;
        if (times==3){
            times=2;
        }
        bottom_hide_box.style.transform="translateX("+(-widths*times)+"px)";
    }
    right_left_btn.onclick=function () {
        times--;
        if (times==-1){
            times=0;
        }
        bottom_hide_box.style.transform="translateX("+(-widths*times)+"px)";
    }

    ///////////////////////////为你推荐//////////////////////////////////////
    let right_left_btn1=document.querySelector(".shopping_top .right_left");
    console.log(right_left_btn1);
    let right_right_btn1=document.querySelector(".shopping_top .right_right");
    console.log(right_right_btn1);
    let shopping_list_hide=document.querySelector(".shopping_list .shopping_list_hide");
    console.log(shopping_list_hide);
    let times1=0;
    right_right_btn1.onclick=function () {
        times1++;
        console.log(times1);
          if(times1==3){
            times1=2;
        }

        shopping_list_hide.style.transform="translateX(-978px)";
        if( times1==2){
            shopping_list_hide.style.transform="translateX(-1260px)";

        }

    }
    right_left_btn1.onclick=function () {
        times1--;
        console.log(times1);
        if(times1==-1){
            times1=0;
        }

        shopping_list_hide.style.transform="translateX(-248px)";
        if( times1==0){
            shopping_list_hide.style.transform="translateX(0px)";

        }

    }
    /////////////////////////////小米闪购/////////////////////////////////////
    //////////////////////////////顶制////////////////////////////////////////
    let back=document.querySelector(".fixed .li4");
    console.log(back);
    back.onclick=function(){
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    //////////////////////////////顶制////////////////////////////////////////


}