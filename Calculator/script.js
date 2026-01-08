function calculator(arg){
    let box= document.getElementById('box')
    box.value = box.value + arg
    
}

function restartCalculator(){
    window.location="index.html"
}

function calculateResult(){
    let box= document.getElementById('box')
    try{
    box.value= eval(box.value)
    }catch{
        box.value="Stupid, write correct values"
    }
}

function deleteOneValue(){
    let box= document.getElementById('box')
    box.value = box.value.slice(0,-1)
}