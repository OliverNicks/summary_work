// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll)
//     function animOnScroll(){
//         for (let index = 0; index < animItems.length; index++) {
//             const animItems = animItems[index];
//             const animItemsHeight = animItems.offsetHeight; 
//             const animItemsOffset = offset(animItem).top;
//             const animStart = 1;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset + animItemsHeight)) {
//                 animItem.classList.add('_active')
//             }
//             else{
//                 animItem.classList.remove('_active')
//             }
//         }
//     }
//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

//     }
//     animOnScroll()
// }






//скрипт для адаптивных изображений

$("document").ready(function(){
    resize_b_1()
    $(window).resize(function(){
        resize_b_1()
    })
    $("#block1 .list a:nth-child(1)").click(function(){
        $("#block1-frame iframe").attr("src", "b1-1/index.html")
    })
    $("#block1 .list a:nth-child(2)").click(function(){
        $("#block1-frame iframe").attr("src", "b1-2/index.html")
    })
    $("#block1 .list a:nth-child(3)").click(function(){
        $("#block1-frame iframe").attr("src", "b1-3/index.html")
    })
    $("#block1 .list a:nth-child(4)").click(function(){
        $("#block1-frame iframe").attr("src", "b1-4/index.html")
    })
    $("#block1 .list a:nth-child(5)").click(function(){
        $("#block1-frame iframe").attr("src", "b1-5/index.html")
    })
    $("#block1 .list a").click(function(){
        $("#block1-frame").toggleClass("active")
    })
    $("#block1-frame .btn").click(function(){
        $("#block1-frame").toggleClass("active")
    })
})
function resize_b_1(){
    for (var i = 1; i <= 5; i++) {
        var itm_w = $("#block1 .list a:nth-child(" + i.toString() + ") .item").width()
        var itm_h = $("#block1 .list a:nth-child(" + i.toString() + ") .item").height()
        var img_w = $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").width()
        var img_h = $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").height()
        var itm_svs = itm_w / itm_h
        var img_svs = img_w / img_h
        if(itm_svs > img_svs){
            $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").css("width", "100%")
            $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").css("height", "auto")
        }
        else{
            $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").css("height", "100%")
            $("#block1 .list a:nth-child(" + i.toString() + ") .item .bg-img").css("width", "auto")
        }
    }
}








//скрипт для #block3
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



//скрипт для плавной прокрутки до якоря
$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top}, 777);
    e.preventDefault();
    return false;
    });
}); 






















//скрипт для header 
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}

    