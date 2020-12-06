
    var clicks = 2;
    var shadowclicks = 0;
    var name = "."
   
    function onClick(name) {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("gift").style.opacity = "0"; 
            document.getElementById("shadow").style.opacity = "0"; 

        if(clicks==9){
            document.getElementById("gift").style.opacity = "0.1"; 
        }
        if(clicks==8){
            document.getElementById("gift").style.opacity = "0.2"; 
        }
        if(clicks==8){
            document.getElementById("gift").style.opacity = "0.3"; 
        }
        if(clicks==7){
            document.getElementById("gift").style.opacity = "0.4"; 
        }
        if(clicks==6){
            document.getElementById("gift").style.opacity = "0.5"; 
        }
        if(clicks==5){
            document.getElementById("gift").style.opacity = "0.6"; 
        }
        if(clicks==4){
            document.getElementById("gift").style.opacity = "0.7"; 
        }
        if(clicks==3){
            document.getElementById("gift").style.opacity = "0.8"; 
        }
        if(clicks==2){
            document.getElementById("gift").style.opacity = "0.9"; 
        }
        if(clicks==1){
            document.getElementById("gift").style.opacity = "1"; 
        }
        if(clicks<=0){
            document.getElementById("gift").style.opacity = "0"; 
        }

        
        if(clicks==0){
            document.getElementById("header").innerHTML = "Ein Schatten ist aufgetaucht";
            document.getElementById("clicks").innerHTML ="Wer mag das sein?";
            document.getElementById("shadow").style.opacity = "1";
            
        }
        if(clicks==-1){

            document.getElementById("header").innerHTML = "Es ist " +name+ "!";
            document.getElementById("clicks").innerHTML ="Zieh dein Weihnachtsoutfit an!";
            document.getElementById("notfestive").style.opacity = "1";
        }
        if(clicks==-2){
            document.getElementById("header").innerHTML = "Sehr schick!";
            document.getElementById("clicks").innerHTML ="Geselle dich zum Rest der Familie!";
            document.getElementById("festive").style.opacity = "1";
        }
        if(clicks==-3){
            document.getElementById("header").innerHTML = "noch ein bisschen Geduld...";
            document.getElementById("clicks").innerHTML ="Die anderen kommen bestimmt auch bald";
            document.getElementById("shadow").style.opacity = "0";
            document.getElementById("notfestive").style.opacity = "0";
            document.getElementById("festive").style.opacity = "0";
            document.getElementById("all").style.opacity = "1";
            document.getElementById("buttonclick").innerHTML ="Lass es schneien";

            if(name=="Papa"){
                document.getElementById("header").innerHTML = "Hurra!";
            document.getElementById("clicks").innerHTML ="Endlich ist auch der letzte da!";

            }
        }
        if (clicks<-3 ){
            if(clicks % 2 == 0) {
                document.getElementById("buttonclick").innerHTML ="Das war genug Schnee";
                document.getElementById("snowcontainer").style.display = "inline"; 
            }
            
            // if the number is odd
            else {
                document.getElementById("buttonclick").innerHTML ="Lass es schneien";
                document.getElementById("snowcontainer").style.display = "none"; 
            }
            document.getElementById("header").innerHTML = "Fröhliche Weihnachten!";
            document.getElementById("clicks").innerHTML ="";
        }
    };
    