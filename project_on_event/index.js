// generate a random colour 

const randomcolor = function(){
    const haxvalue = "0123456789ABCDEF";
    let color = "#";
    for (let i =0 ; i<6 ; i++){
        color = color + haxvalue[Math.floor(Math.random() * 16)];
    }
    return color;
}
let stopcolor
const startchangingcolor = function(){
    function changebgcolor(){
        document.body.style.backgroundColor = randomcolor()
    }
     stopcolor = setInterval(changebgcolor, 1000)
}

const stopchangingcolor = function(){
    clearInterval(stopcolor)
    console.log("STOPPD")
}

document.querySelector('#start').addEventListener('click', startchangingcolor)
document.querySelector('#stop').addEventListener('click', stopchangingcolor)