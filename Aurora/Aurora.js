//切换图片功能
    window.onload=initLinks;

    var imgs=new Array(4);
        imgs[0]="https://resource.bcgame-face2face.haorenao.cn/slide04.jpg";
        imgs[1]="https://resource.bcgame-face2face.haorenao.cn/slide05.jpg";
        imgs[2]="https://resource.bcgame-face2face.haorenao.cn/slide03.jpg";
        imgs[3]="https://resource.bcgame-face2face.haorenao.cn/slide01.jpg";

    var a=0;
    function initLinks(){
        document.getElementById("last").onclick=goLast;
        document.getElementById("next").onclick=goNext;
        }
    function goLast(){
        if(a==0){
            a=imgs.length;
            }
        a--;
        document.getElementById("img-1st").src=imgs[a];
        }
    function goNext(){
        a++;
        if(a==imgs.length){
            a=0;
            }
        document.getElementById("img-1st").src=imgs[a];
        }