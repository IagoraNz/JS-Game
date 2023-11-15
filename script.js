var numeroSecreto = Math.floor(Math.random() * 100) + 1; //Math.floor arredonda o número para baixo e Math.random gera um número aleatório entre 0 e 100
var tentativas = 0; //Esqueça isso e chore

//document.getElementById pega o elemento do HTML que tem o id e une ao js
document.getElementById("botaodechute").addEventListener("click", function(){ //"click" é o evento que será adicionado ao elemento "botaodechute"
    //Pense assim: pego o elemento e adiciono uma ação
    //addEventListener adiciona um evento para que o botão possa realize o js quando clicado

    var chute = parseInt(document.getElementById("entradedechute").value); //parseInt converte o valor do input para inteiro, pense numa variável int que recebe o valor

    //document.getElementById("entradedechute") pega o elemento do HTML que tem o id entradedechute
    //.value pega o valor do input

    if(isNaN(chute) || chute < 1 || chute > 100){ //isNaN verifica se o valor passado como parâmetro é um número
        alert("Digite um número válido entre 1 e 100."); //Dá um alerta caso o valor não seja válido
        return; //Retorna para o início da função
    }

    tentativas++; //Incrementa o número de tentativas para exibir depois

    if(numeroSecreto === chute){
        document.getElementById("resultado").textContent = "Acertou!"; //textContent pega no HTML e adiciona o texto passado como parâmetro
        document.getElementById("tentativas").textContent = "Número de tentativas: " + tentativas; //Mostra o número de tentativas
        document.getElementById("botaodechute").disabled = true; //Uma vez true, ou seja, o usuário acertar, o botão é desabilitado
    } 
    else if(numeroSecreto > chute){
        document.getElementById("resultado").textContent = "O número secreto é maior!"; //Mostra que o número secreto é maior que o chute
    } //O document.getElementById("resultado").textContent é o elemento que mostra o resultado do chute
    else{
        document.getElementById("resultado").textContent = "O número secreto é menor!"; //Mostra que o número secreto é menor que o chute
    }
});

document.getElementById("resetar").addEventListener("click", function(){ //Adiciona um evento ao botão de resetar, para reiniciar o jogo
    numeroSecreto = Math.floor(Math.random() * 100) + 1; //Gera um novo número secreto
    tentativas = 0; //Zera o número de tentativas
    document.getElementById("resultado").textContent = ""; //As aspas vazias fazem com que o texto do elemento seja apagado, a mesma coisa para os seguintes
    document.getElementById("tentativas").textContent = "";
    document.getElementById("entradedechute").value = "";
    document.getElementById("botaodechute").disabled = false; // Habilita o botão ao reiniciar
});
