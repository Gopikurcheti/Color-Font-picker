function dice(){
    let number=Math.random();
    let answer;
    number = number*100;

    if(number>=0 && number<16){
       document.getElementById('image').src="six.png"
    } else if(number>=16 && number<32){
        document.getElementById('image').src="five.png"
    } else if(number>=32 && number<48){
        document.getElementById('image').src="four.png"
    } else if(number>=48 && number<64){
        document.getElementById('image').src="two.png"
    } else if(number>=64 && number<80){
        document.getElementById('image').src="one.png"
    } else if(number>=80){
        document.getElementById('image').src="three.png"
    }

   
}