function botao(){
    //alert("vai morrer pra la zika");
    document.getElementById("agradecimento").innerHTML = "sai deus eh mais"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obeigada por passar o mouse"
    elemento.innerHTML="obrigada por passar o mouse xuxu"
   // alert("trocar textos")
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
   elemento.innerHTML="Passe o mouse aqui"
}
function load(){
    alert("pagina carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}

function redirecionar(){
    window.open("https://twitter.com/home") // abre outra janela
   // window.location.href="https://twitter.com/home" // abre na mesma janela
} 

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade>= 18){
        validar = true
     }else{
         validar=false
     }    
     return validar; // importante
}
var idade= prompt("qual sua idade?");
console.log(validaIdade(idade));
*/


// alert(soma(5,10));
/*var d = new Date();
console.log("hoje e" + d.getDate()+ "/" + (d.getMonth()+1))
alert(d.getHours());
alert(d.getMinutes());
*/

/*laços de repetiçao
var count = 0;
while (count <=5 ){
    console.log(count);
    alert(count);
    count++;
}
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/* ///condicionais
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert ("maior de idade");
}else{
    alert("menor de idade");
}
*/

//[{nome:"maça", cor: "vermelho"}, {nome:"uva", cor: "roxo"}]
//console.log(frutas);
//alert(frutas[1].nome);

/*
var fruta = {nome:"maça", cor: "vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("|"));

//var nome = "Melissa Vieira";
//var idade = 20;
//var idade2 = 10;
//var frase = "preciso de um emprego";
/*alert(nome + " , " + idade + " anos"); 
alert(idade + idade2); */
/*
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("preciso de", "conseguirei")) 
console.log(frase.toUpperCase)*/

