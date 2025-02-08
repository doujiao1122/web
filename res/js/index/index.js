//标题栏开关
let o =  document.querySelectorAll(".nav-list");
let o_val = 0;
function div_on(){
    switch (o_val) {
        case 0:
            o[0].style.display = 'none';
            o_val++;
            break;
        case 1:
            o[0].style.display = 'block';
            o_val = 0;
            break;
        default :

    }
}
window.onload = div_on;


//获取时间
const now = new Date();
function createtime(){
    const grt = new Date("06/18/2022 00:00:00");/*---这里是网站的启用时间--*/
    now.setTime(now.getTime()+250);
    let days = (now - grt) / 1000 / 60 / 60 / 24;
    let dnum = Math.floor(days);
    let hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    let hnum = Math.floor(hours);
    if(String(hnum).length ==1 ){hnum = "0" + hnum;}
    let minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    let mnum = Math.floor(minutes);
    if(String(mnum).length ==1 ){mnum = "0" + mnum;}
    let seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    let snum = Math.round(seconds);
    if(String(snum).length ==1 ){snum = "0" + snum;}
    document.getElementById("timeDate").innerHTML = dnum+"天";
    document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
}
setInterval("createtime()",250);

//打开网页链接
function on_gfxcamp(){
    window.open('http://www.gfxcamp.com/','_blank');
}