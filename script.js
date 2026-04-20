function rolarPara(id){
document.getElementById(id).scrollIntoView();
}

function gerarMapa(){

const setores = Math.floor(Math.random()*8)+1;

document.getElementById("saidaMapa").innerHTML =
"Mapa concluído: " + setores + " setores analisados.";
}

function detectarPraga(){

const risco = ["Baixo","Médio","Alto"];

let sorteio = risco[Math.floor(Math.random()*3)];

document.getElementById("saidaPraga").innerHTML =
"Risco detectado: " + sorteio;
}

function calcularAgua(){

let area = Number(document.getElementById("area").value);

if(area <=0 || isNaN(area)){
document.getElementById("saidaAgua").innerHTML = "Digite valor válido.";
return;
}

let litros = area * 280;

document.getElementById("saidaAgua").innerHTML =
"Uso ideal: " + litros + " litros de água.";
}

function animarPainel(){

document.getElementById("aguaNumero").innerHTML = "37%";
document.getElementById("prodNumero").innerHTML = "28%";
document.getElementById("perdaNumero").innerHTML = "41%";
}

function quiz(correto){

if(correto){
document.getElementById("quizResultado").innerHTML =
"✅ Correto! Drone evita desperdício.";
}else{
document.getElementById("quizResultado").innerHTML =
"❌ Resposta incorreta.";
}

}

document.getElementById("temaBtn").addEventListener("click",function(){
document.body.classList.toggle("light");
});

document.getElementById("formulario").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("mensagemForm").innerHTML =
"✅ Solicitação enviada com sucesso!";

});
