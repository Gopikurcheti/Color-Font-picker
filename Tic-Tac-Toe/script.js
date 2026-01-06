let player = 'O'




function markPlayer(box_id){
    if(player=='O'){
        document.getElementById(box_id).innerHTML=player
        document.getElementById(box_id).style.backgroundColor='orange'
        checkWinner()
        player='X'
    }else{
        document.getElementById(box_id).innerHTML=player
        document.getElementById(box_id).style.backgroundColor='skyblue'
        checkWinner()
        player='O'
    }
    
}

function restartGame(){
    window.location="index.html"
}

function checkWinner(){

    let c1= document.getElementById('box1').innerHTML
    let c2= document.getElementById('box2').innerHTML
    let c3= document.getElementById('box3').innerHTML
    let c4= document.getElementById('box4').innerHTML
    let c5= document.getElementById('box5').innerHTML
    let c6= document.getElementById('box6').innerHTML
    let c7= document.getElementById('box7').innerHTML
    let c8= document.getElementById('box8').innerHTML
    let c9= document.getElementById('box9').innerHTML
    
    if(c1==player && c2==player && c3==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c4==player && c5==player && c6==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c6==player && c7==player && c8==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c1==player && c4==player && c7==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c2==player && c5==player && c8==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c3==player && c6==player && c9==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c1==player && c5==player && c9==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
    else if(c3==player && c5==player && c7==player){
        document.getElementById('result').innerHTML=player+" is the winner"
    }
}