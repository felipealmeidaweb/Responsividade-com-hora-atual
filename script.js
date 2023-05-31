

function carregar(){
    var msg = document.querySelector("#txt")
    var img = document.querySelector("#img")
    var data = new Date()
     var horatual = data.getHours()
     //var de teste
     //var horatual = 10
    msg.innerHTML = `agora são ${horatual} horas`

     if (horatual >= 0 && horatual < 12 ){
        //bom dia
        img.src="imagens/manha.png"
        document.body.style.background = " linear-gradient(to right, #ccccb2, #757519)"



     } else if (horatual < 18){
        //boa tarde
        img.src="imagens/tarde.png"
        document.body.style.background = "linear-gradient(to right, #659999, #f4791f)"
     } else{
        //boa noite
        img.src="imagens/noite.png";
        document.body.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
     }
    
}