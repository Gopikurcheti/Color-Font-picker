function myFun(){
   let num=document.getElementById('input').value 

   num = parseInt(num)
   let h3=document.getElementById('result')

   if(num<1 || num >9){
    alert("write the value b/w 1 and 9")
   }
   else{

          

    if(num==1){
        h3.innerHTML="Start where you are. Use what you have. Do what you can."
    }else if(num==2){
        h3.innerHTML="Patience is not waiting, it is how you act while waiting."
    }
    else if(num==3){
        h3.innerHTML="Creativity is intelligence having fun."
    }
    else if(num==4){
        h3.innerHTML="Discipline is the bridge between goals and achievement."
    }
    else if(num==5){
        h3.innerHTML="Change is painful, but nothing is as painful as staying stuck."
    }
    else if(num==6){
        h3.innerHTML="Small acts, when multiplied, can transform the world."
    }
    else if(num==7){
        h3.innerHTML="Silence is a source of great strength."
    }
    else if(num==8){
        h3.innerHTML="Success is earned, not gifted."
    }
    else if(num==9){
        h3.innerHTML="Believe you can, and you’re halfway there."
    }

    
   }
}

document.getElementById('input').addEventListener("keydown", function(e){
    if(e.key=="Enter"){
        myFun();
    }
});