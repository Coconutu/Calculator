function addToScreen(text){
    const screen=document.querySelector("#display");
    screen.value+=text;
}
function sterge(){
    const screen=document.querySelector("#display");
    screen.value="";
}
function evalueaza(){
    const screen=document.querySelector("#display");
    try{
        screen.value=eval(screen.value);
    }
    catch (err){
        screen.value=err.text;
    }
    
}
function stergeUnCaracter(){
    const screen=document.querySelector("#display");
    screen.value=screen.value.slice(0, -1);
}
function radical(){
    const screen=document.querySelector("#display");
    screen.value=Math.sqrt(screen.value);
}
function memoreaza(){
    const screen=document.querySelector("#display");
    localStorage.setItem("memorie", screen.value);
}

function reapeleazaMemoria(){
    const screen=document.querySelector("#display");
    const valoareMemorie=localStorage.getItem("memorie");
    if(valoareMemorie!==null){
        screen.value+=valoareMemorie;
    }
  }
