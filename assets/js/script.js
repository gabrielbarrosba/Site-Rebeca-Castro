window.onscroll=function(){rolagemCabecalho()};

function rolagemCabecalho(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementsByTagNameNS("header")[0].style.padding= "30px 10px";
        document.getElementById("logo").style.fontSize="25px";
    }else{
        document.getElementsByTagNameNS("header")[0].style.padding= "80px 1px";
        document.getElementById("logo").style.fontSize="35px";
    }
}