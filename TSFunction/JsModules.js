var jkModule = function(vip){
    //申明私有成員
    var Yvip = document.getElementById(vip);
    YQ = "123123123";
    return{
        //公開成員
        add: function(t){
            if(t>=12){
                var Yv = t;
                Yvip.innerHTML = "年費：" + Yv + "--QQ群：" + YQ;
            }else{
                var Mv = t;
                Yvip.innerHTML = "月費：" + Mv;
            }
        }
    }
}

var jm = new jkModule('vip');
jm.add(12);
jm.YQ;