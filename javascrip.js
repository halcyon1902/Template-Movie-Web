$(document).ready(function(){
    var demtang1 = 0;
    $(".prev1").hide()
    $(".next1").click(function(){
        demtang1++
        $(".prev1").show()
        if(demtang1 == 1)
        $(".list1").css('marginLeft','-100%')
        if(demtang1 == 2)
        {
        $(".list1").css('marginLeft','-200%')
        $(".next1").hide();
        }
    })
    $('.prev1').click(function(){
        $(".next1").show()
        if(demtang1 == 1)
        {
            $('.list1').css('marginLeft','0%')
            demtang1--;
            $('.prev1').hide();
        }
        if(demtang1 == 2)
        {
            $('.list1').css('marginLeft','-100%')
            demtang1--;
        }
    })
    var demtang2 = 0;
    $(".prev2").hide()
    $(".next2").click(function(){
        demtang2++
        $(".prev2").show()
        if(demtang2 == 1)
        $(".list2").css('marginLeft','-100%')
        if(demtang2 == 2)
        {
        $(".list2").css('marginLeft','-200%')
        $(".next2").hide();
        }
    })
    $('.prev2').click(function(){
        $(".next2").show()
        if(demtang2 == 1)
        {
            $('.list2').css('marginLeft','0%')
            demtang2--;
            $('.prev2').hide();
        }
        if(demtang2 == 2)
        {
            $('.list2').css('marginLeft','-100%')
            demtang2--;
        }
    })
    var demtang3 = 0;
    $(".prev3").hide()
    $(".next3").click(function(){
        demtang3++
        $(".prev3").show()
        if(demtang3 == 1)
        $(".list3").css('marginLeft','-100%')
        if(demtang3 == 2)
        {
        $(".list3").css('marginLeft','-166.3%')
        $(".next3").hide();
        }
    })
    $('.prev3').click(function(){
        $(".next3").show()
        if(demtang3 == 1)
        {
            $('.list3').css('marginLeft','0%')
            demtang3--;
            $('.prev3').hide();
        }
        if(demtang3 == 2)
        {
            $('.list3').css('marginLeft','-100%')
            demtang3--;
        }
    }) 
    var demtang4 = 0;
    $(".prev4").hide()
    $(".next4").click(function(){
        demtang4++
        $(".prev4").show()
        if(demtang4 == 1){
        $(".list4").css('marginLeft','-100%')
        $(".next4").hide()
        }
    })
    $('.prev4').click(function(){
        $(".next4").show()
        if(demtang4 == 1)
        {
            $('.list4').css('marginLeft','0%')
            demtang4--;
            $('.prev4').hide();
        }
    }) 
    var demtang5 = 0;
    $(".prev5").hide()
    $(".next5").click(function(){
        demtang5++
        $(".prev5").show()
        if(demtang5 == 1)
        $(".list5").css('marginLeft','-100%')
        if(demtang5 == 2)
        {
        $(".list5").css('marginLeft','-134%')
        $(".next5").hide();
        }
    })
    $('.prev5').click(function(){
        $(".next5").show()
        if(demtang5 == 1)
        {
            $('.list5').css('marginLeft','0%')
            demtang5--;
            $('.prev5').hide();
        }
        if(demtang5 == 2)
        {
            $('.list5').css('marginLeft','-100%')
            demtang5--;
        }
    }) 
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 150)
            $("#gototop").show()
        else
            $("#gototop").hide()
    })
    $("#gototop").click(function(){
        $("html, body").animate({
            'scrollTop':'0px'
        },1000);
    })
    var light = 0;
    $('#light-dark').change(function(){
        light++;
        if(light % 2 == 1){
            $(".r").css({
                "background-color" : "white"
            })
            $(".namefilm").css({
                "color" : "black"
            })
            $("h1").css({
                "color" : "black"
            })
        }
        
        else
        {
            $(".r").css({
                "background-color" : "#212121"
            })
            $(".namefilm").css({
                "color" : "#c8c8c8"
            })
            $("h1").css({
                "color" : "white"
            })
        }
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 70){
            $(".mainmenus").css({
                "position" : "fixed",
                "top" : "0px",
                "background-color" : "black",
                "left" : "0px",
                "right" : "0px",
            })
        }
        else
        {
            $(".mainmenus").css({
                "position" : "relative",
                "top" : "0px",
                "background-color" : "black",
                "left" : "0px",
                "right" : "0px"
            })
        }
    })
    
    $("#btnsearch").click(function(){
        var kq = ""
        var k = $("#textbox").val()
        var h = $(".category-content span")
        for (var i = 0; i < h.length; i++)
        {
            if (h[i].innerText.indexOf(k) >= 0)
                kq = kq + (h[i].innerText) + "\n"
        }
        
        if (kq != "")
            window.alert("Kết quả cần tìm :" + "\n" + kq)
        else
            window.alert("Không có phim cần tìm")
    })
});

