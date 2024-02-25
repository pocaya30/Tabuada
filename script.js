
//variavel resultado
var result = document.getElementById("resul");

//função cliquei no botão Gerar Tabuada
function cliquei() {

    result.innerHTML = ""; //recebe nosso resultado

    let num = document.getElementById("digit-number").value; //pega o valor do nosso input e coloca na variavel num

    //se o usuario não digitar um número ou digitar um numero com ., e clicar no botão, gera um alerta na tela pedindo para ele digitar um número.
    if(num === "" || !Number.isInteger(parseFloat(num))) {
        alert("Digite um Número válido!");
        result.appendChild(listItem); //limpa o resultado 
       }

       //Loop For faz a verificação da variavel i até 10
   for (let i = 0; i <= 10; i++) {

    let listItem = document.createElement("li"); //criação de uma variavel lista
    listItem.innerHTML = `${num} x ${i} = <strong>${num * i}</strong>` //lista recebe o valor de num x i = num * 1

    result.appendChild(listItem); //exibe o resultado da listItem no result
    
   } 
}



