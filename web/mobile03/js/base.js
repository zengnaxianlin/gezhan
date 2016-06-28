/* 
* @Author: anchen
* @Date:   2015-12-04 11:50:56
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-15 17:03:40
*/

$(document).ready(function(){
    /*var colors = ['#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7'];
    $('.all>div').each(function(index,element){
        $(element).css('background',colors[index]);
    })
    var num=0;
    $(window).swipeUp(function(){
        num++
        if(num>4){num=4}
        $('.all').css('-webkit-transform','translateY(-'+num+'00%)')
    }).swipeDown(function(){
        num--
        if(num<0){num=0}
        $('.all').css('-webkit-transform','translateY(-'+num+'00%)')
    })      
    
    $('span').tap(function(){
        alert(123)  
    })

    /*阻止移动浏览器默认设置的阻止滑动*/
   /* document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);*/
    var widths=['93%','45%','56%','22%','83%','65%','23%','55%','87%','99%','23%','12%','90%','66%','98%','45%'];
    $('.progressbar .bar .bar-width').each(function(index,element){
        $(element).css('width',widths[index]);
    })
    $('.progressbar p strong').each(function(index,element){
        $(element).html(widths[index]);
    })
});