 var i=1;
function beat(t)
{
    if(t==4)
    {
        i--;
        if(i==0)
        {
            i=4;
        }
        document.getElementById("img_i").src="img_lunbo/"+i+".jpg";
        btn_ss();
    }
    else{
        i++;
        if(i==5){
            i=1;
        }
        document.getElementById("img_i").src="img_lunbo/"+i+".jpg";
        btn_ss();
    }
}

    function aaa(){
        i++;
        if(i==5)
        {
            i=1;
        }
        document.getElementById("img_i").src="img_lunbo/"+i+".jpg";
        btn_ss();
    }
  var  a=setInterval(aaa,2000);
    function aa(){
       clearInterval(a);
        document.getElementById("s1").style.display="block";
        document.getElementById("s2").style.display="block";
    }
    function aa1()
    {
        a=setInterval(aaa,2000);
        document.getElementById("s1").style.display="none";
        document.getElementById("s2").style.display="none";
    }
    function btn_ss(){
        for (var w=0;w<document.getElementsByClassName("ss").length;w++)
        {
            document.getElementsByClassName("ss")[w].style.backgroundColor="#00bcd4";
        }
        document.getElementById("ss"+i+"").style.backgroundColor="red";
    }
    function aa2(w){
        i=w;
//        alert(t);
        btn_ss();
        document.getElementById("img_i").src="img_lunbo/"+i+".jpg";
    }

