
const URL_POST = "https://jsonplaceholder.typicode.com/posts"

let puntos = 0;
let tiempo = 60;
let necesarios = 30;
let vecesGanadas = 0;
let vecesPerdidas = 0;




function sumarPuntos(){
    puntos++;
    document.getElementById(`puntos`).innerHTML= `Puntos: <b>${puntos}/${necesarios}</b>  `

    
    let numRandom1= Math.round(Math.random()*570);
    let numRandom2= Math.round(Math.random()*570);

    document.getElementById("player").style.marginTop = numRandom1 + "px";
    document.getElementById("player").style.marginLeft = numRandom2 + "px";

    if(puntos==30){
        alert("Ganaste el juego");
        tiempo=60;
        puntos=0;
        vecesGanadas++;
        console.log(vecesGanadas);
        localStorage.setItem("vecesGanadas", vecesGanadas);
        localStorage.getItem("vecesGanadas")
    }
}

const restarTiempo=()=>{
    tiempo--
    document.getElementById(`tiempo`).innerHTML = `Tiempo:<b> ${tiempo}</b>`
    if(tiempo==0){
        alert("Perdiste el juego");
        tiempo=60;
        puntos=0;
        vecesPerdidas++;
        localStorage.setItem("vecesPerdidas", vecesPerdidas);
        localStorage.getItem("vecesPerdidas")
    }
}

setInterval(restarTiempo,1000);


document.getElementById(`player`).addEventListener("mouseover", sumarPuntos);


$("#boton-facil").on("click", function(e) {
    e.preventDefault();
    $("#player")
    .css({"width":"70px" , "height":"70px"})
})

$("#boton-medio").on("click", function(e) {
    e.preventDefault();
    $("#player")
    .css({"width":"50px" , "height":"50px"})
})

$("#boton-dificil").on("click", function(e) {
    e.preventDefault();
    $("#player")
    .css({"width":"25px" , "height":"25px"})
})


$("#formulario").on("submit", (e) => {
    e.preventDefault();
    const payload = {usuario: $("#nombreUsuario").val() };
    $.post(URL_POST, payload, (respuesta, estado) => {
        console.log(respuesta);
        console.log(estado);

        if (estado==="success") alert(`El nombre de usuario ${respuesta.usuario} ha sido guardado`)  
    })
})