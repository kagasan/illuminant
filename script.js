var cnt = 0;
window.onload=function(){
    var arg = new Object;
    var urlsp = location.href.split('?');
    var flg = 1;
    if(urlsp.length > 1){
        var pair = urlsp[1].split('&');
        for(var i=0;pair[i];i++) {
            var kv = pair[i].split('=');
            arg[kv[0]]=kv[1];
        }
    }
    if(arg.color1 === undefined)flg = 0;
    if(arg.color2 === undefined)flg = 0;
    if(arg.wait === undefined)flg = 0;
    if(flg){
        document.body.innerHTML = "";
        function loop(){
            cnt++;
            if(cnt%2){
                document.body.style.background = arg.color1;
            }
            else{
                document.body.style.background = arg.color2;
            }
        }
        setInterval(loop, parseInt(arg.wait));
    }
}

function toHex(rgb){
    var res = "#";
    rgb = rgb.replace(/\s+/g, "");
    rgb = rgb.replace(/rgb\(/g, "");
    rgb = rgb.replace(/\)/g, "");
    rgb = rgb.split(',');
    for(var i=0;i<3;i++){
        var tmp = parseInt(rgb[i]).toString(16);
        if(tmp.length<2)tmp = "0"+tmp;
        res += tmp;
    }
    return res;
}
function hoge(){
    var url = location.href.replace(/\#.*$/, '').replace(/\?.*$/, '');
    url += "?color1=" + toHex(document.forms.colorForm.color1.value);
    url += "&color2=" + toHex(document.forms.colorForm.color2.value);
    url += "&wait=" + document.forms.colorForm.wait.value;
    window.location.href =  url;
}