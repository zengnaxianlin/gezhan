
(function(vip_electricity){vip_electricity.into=function(){_func._intoLoad();}
var _func={_intoLoad:function(){_func.inin();},inin:function(){$.getJSON('js/index.json',function(data){$.each(data,function(i,v){var usern_brand=$('<div class="usern_brand"></div>');$(".usern_b226_list").append(usern_brand);usern_brand.append('<div class="usern_b226 J_sn_10000630"><div class="usern_b226_photo"><a href="#"><img src='+v.vip_img+' width="226" height="288" alt="" /></a></div><div class="usern_b226_text"><div class="usern_b226_attr"><a href="#"><div class="usern_b226_discount"><span class="salebg2">'+v.vip_number+'</span>折起</div><div class="usern_b226_name">'+v.vip_title+'</div></a></div><div class="usern_b226_btn J_sale_btn"></div></div></div></div>')});$.each(data,function(i,v){var s1_mod=$('<div class="s1_mod"></div>')
$(".shop_yesterday").append(s1_mod)
s1_mod.append('<div class="s1_pic"><a href="#"><img src='+v.yesterday_img+' width="310" height="180" alt="" /></a></div><div class="s1_info"><span class="s1_info_discount"><span><span class="salebg2">'+v.yesterday_number+'</span>折起</span></span><span class="s1_info_name">'+v.yesterday_title+'</span><span class="s1_info_time"><span class="s_time_icon"><i>2天17时32分33秒</i></span></span></div>')});});}}})(window.vip_electricity=window.vip_electricity||{});var time_start2=new Date().getTime();var time_end=new Date("2016/02/12 12:12:00").getTime();time_end=time_end+86400000;var time_distance,c;function show_time(){time_distance=time_end-new Date().getTime();if(time_distance<=0)
{clearTimeout(c);return;}
var int_day=Math.floor(time_distance/86400000)
time_distance-=int_day*86400000;var int_hour=Math.floor(time_distance/3600000)
time_distance-=int_hour*3600000;var int_minute=Math.floor(time_distance/60000)
time_distance-=int_minute*60000;var int_second=Math.floor(time_distance/1000)
if(int_day<10){int_day="0"+int_day;}
if(int_hour<10){int_hour="0"+int_hour;}
if(int_minute<10){int_minute="0"+int_minute;}
if(int_second<10){int_second="0"+int_second;}
$(".cd-d").val(int_day);$(".cd-h").val(int_hour);$(".cd-m").val(int_minute);$(".cd-s").val(int_second);c=setTimeout("show_time()",1000)}
$(function(){var $key=0,$num=0,$speed=500;$(".focus_banner_center .right").click(function(event){fun();});$(".focus_banner_center .left").click(function(event){$key--;if($key<0){$key=3;$(".focus_banner_con ul").css({"left":-400+'%'})};$(".focus_banner_con ul").stop().animate({"left":-$key*100+'%'},$speed)
$num--;if($num<0){$num=3;};$(".focus_banner_center i").eq($num).addClass('banner_circle').siblings().removeClass('banner_circle');});$(".focus_banner_center p i").click(function(event){var $num=$(this).index();var $key=$(this).index();$(".focus_banner_center p i").eq($num).addClass('banner_circle').siblings().removeClass('banner_circle');$(".focus_banner_con ul").stop().animate({"left":-$key*100+'%'},$speed)});var timer=setInterval(fun,1500)
function fun(){$key++;if($key>4){$key=1;$(".focus_banner_con ul").css({"left":0})};$(".focus_banner_con ul").stop().animate({"left":-$key*100+'%'},$speed)
$num++;if($num>3){$num=0;};$(".focus_banner_center i").eq($num).addClass('banner_circle').siblings().removeClass('banner_circle');};$(".focus_banner").hover(function(){clearInterval(timer);},function(){timer=setInterval(fun,1500)});})