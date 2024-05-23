# 📄 Aplicação prática em JavaScript: jogo de adivinhar um número
O código JavaScript implementa um jogo de adivinhação de números. Os eventos de clique permitem que o jogador faça palpites e reinicie o jogo.

## :link: Ambiente de desenvolvimento
1. Em relação ao JavaScript
```
v18.18.0
```
2. E o Visual Studio Code
```
1.89.1
```

## :link: Descrição do algoritmo
O código JavaScript apresenta um jogo simples de adivinhação de números em uma página da web. Ele inicia definindo um número aleatório entre 1 e 100, que o jogador deve tentar adivinhar. A variável `tentativas` mantém o controle do número de tentativas feitas pelo jogador. Dois eventos de clique são configurados: um para o botão de chute e outro para o botão de resetar.

Quando o botão de chute é clicado, uma função é acionada. Dentro desta função, o valor digitado pelo jogador é obtido a partir do campo de entrada (`entradachute`). Se o valor não for um número válido entre 1 e 100, uma mensagem de alerta é exibida. Caso contrário, o número de tentativas é incrementado, e o programa verifica se o chute do jogador corresponde ao número secreto. Dependendo do resultado, uma mensagem indicando se o número é maior, menor ou igual ao número secreto é exibida no elemento HTML correspondente.

O botão de resetar também possui um evento de clique associado. Quando clicado, ele gera um novo número secreto, reinicia o contador de tentativas e limpa as mensagens exibidas na página, permitindo ao jogador reiniciar o jogo.
