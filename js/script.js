$(document).ready(function(){
    $(window).scroll(function(){
        const sct = $(window).scrollTop();

        if(sct >= 100){
            $('.container.fi').addClass('active');
            $('header').addClass('active');
            $('.header-wrap').addClass('active');
            $('.search-box').addClass('on');
            $('.menu-se').addClass('on');
        }else{
            $('.container.fi').removeClass('active');
            $('header').removeClass('active');
            $('.header-wrap').removeClass('active');
            $('.search-box').removeClass('on');
            $('.menu-se').removeClass('on');
        }
    });

    $('.search').click(function(){
        $('.search-box').toggleClass('active');
        $('.menu-se').removeClass('active');
    });
    $('.cancel-box button').click(function(){
        $('.search-box').removeClass('active');
    });
    $('.bar').click(function(){
        $('.menu-se').toggleClass('active');
        $('.search-box').removeClass('active');
    });

    $('.toggle_label').click(function(){
        const second = $('label[for="trigger"] span:nth-child(2)');
        
        $(second).toggleClass('active');
        
        $('.sec-4-inbox').toggleClass('active');
        $(this).parents('.box').siblings().children('.sec-4-inbox').removeClass('active');

        //.sec-4-inbox에 active 달려있으면 - 버튼 유지
        const on = $('.sec-4-inbox').hasClass('active');
        if(on === true){
            // console.log('aaa')
            $(second).addClass('active');
            $(this).parents('.box').siblings().find(second).removeClass('active');
        }else if(on===false){
            $(second).removeClass("active");
        }
    });

    $('.top-btn').click(function(){
        $('html,body').animate({scrollTop:0},400);
    });

    const sec1 = $('.sec-6').offset().top-100;
    const sec2 = $('.sec-1').offset().top-100;
    const sec3 = $('.sec-3').offset().top-100;
    const sec4 = $('.sec-4').offset().top-100;
    const sec5 = $('.sec-5').offset().top-100;
    
    $('.tab1').click(function(){
        $('html,body').animate({
          scrollTop : sec1
        },500);
    });
    $('.tab2').click(function(){
        $('html,body').animate({
            scrollTop : sec2
        },500);
        });
    $('.tab3').click(function(){
        $('html,body').animate({
            scrollTop : sec3
        },500);
    });
    $('.tab4').click(function(){
        $('html,body').animate({
            scrollTop : sec4
        },500);
    });
    $('.tab5').click(function(){
        $('html,body').animate({
            scrollTop : sec5
        },500);
    });
});