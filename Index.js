var setaDereita = window.document.getElementById("seta-dereita")
var Bruna  = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDereita() {
     setaDereita.style = "display:none"
     Bruna.style = "display:none"
     Samantha.style ="display:flex"
     setaEsquerda.style ="display:flex; margin-top: 50px"

}
function RolarParaEsquerda() {
    setaDereita.style = "display:flex; margin-top: 50px"
    Bruna.style = "display:flex"
    Samantha.style ="display:none"
    setaEsquerda.style = "display:none"

}
