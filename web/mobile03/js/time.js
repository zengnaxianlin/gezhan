/* 
* @Author: anchen
* @Date:   2015-12-07 09:21:26
* @Last Modified by:   anchen
* @Last Modified time: 2015-12-14 23:57:36
*/

(function(common){
    // 外部方法
    common.init = function(){
        _func.daoshu();
    };
    common.daoshu = function(obj){
        _func.daoshu(obj);
    }
    //ajax
    common.ajax = {
        get : function(url, param, callback, async, dataType) {
            _func.ajax("get", url, param, callback, async, dataType);
        },
        post : function(url, param, callback, async, dataType){
            _func.ajax("post", url, param, callback,async, dataType);
        }
    };
    // 内部方法
    var _func = {
        ajax : function(type, url, param, callback, async, dataType) {
            $.ajax({  
                type:type,
                url:url,
                cache:false,
                ifModified: true,
                async: undefined === async ? true : async,
                data:param,
                dataType:undefined === dataType ? "json" : dataType,
                success:function(data){
                    //success
                    callback(data);
                },
                error:function(XMLHttpRequest, textStatus){
                    callback({result:false, msg:XMLHttpRequest.status});
                    XMLHttpRequest = null;
                },
                complete:function (XMLHttpRequest, textStatus,errorThrown) {
                    XMLHttpRequest = null;
                }
            });
        },
        newTime : function(currTime,obj){
            // alert(currTime);//currTime时间，obj对象。
            var Tminute = Math.floor(currTime/60000);
            currTime = currTime - Tminute * 60000;
            var Tsecond = Math.floor(currTime/1000);
            currTime = currTime - Tsecond * 1000;
            var Tmillisecond = Math.floor(currTime/10);
            currTime = currTime - Tmillisecond * 10;
            if(Tminute < 10){
                Tminute = "0" + Tminute;
            }
            if(Tsecond < 10){
                Tsecond = "0" + Tsecond;
            }
            if(Tmillisecond < 10){
                Tmillisecond = "0" + Tmillisecond;
            }
                obj.children("span").eq(0).html(Tminute);
                obj.children("span").eq(1).html(Tsecond);
                obj.children("span").eq(2).html(Tmillisecond); 
        },
        // 时间倒数
        daoshu : function(){
            $('div[role="times"]').each(function(){
                var count = $(this).attr('data-time'),
                    _obj = $(this);
                var interval = setInterval(function(){
                    count -= 10;
                    if(count < 0){
                        clearInterval(interval);
                    }else{
                        _func.newTime(count, _obj);
                    }
                }, 10);
            });
        }

    }
})(window.common = window.common || {});
//自动加载
$(function(){
    window.common.init();
});