# 🎯 Praticando JavaScript - AluGames

Projeto desenvolvido durante o curso da **Alura** com o objetivo de treinar manipulação do DOM usando **JavaScript puro**.

## 📚 Objetivo
Exercitar conceitos fundamentais de JS para:
- Selecionar elementos do DOM
- Manipular classes CSS dinamicamente
- Alterar conteúdo de texto na página
- Usar condicionais para controlar comportamento

## 🛠 O que o código faz
A função `alterarStatus(id)` permite **alugar** ou **devolver** um jogo de tabuleiro:

1. Localiza o elemento `<li>` correspondente ao jogo através do `id` (`game-1`, `game-2`, etc.).
2. Seleciona:
   - A `div` que contém a imagem do jogo
   - O botão que dispara a ação
3. Usa `classList.contains()` para verificar se o jogo já está alugado (`dashboard__item__img--rented`).
4. Dependendo do resultado:
   - **Se alugado:** remove a classe extra, altera o texto para “Alugar” e ajusta o botão.
   - **Se disponível:** adiciona a classe extra, altera o texto para “Devolver” e ajusta o botão.

## 🔑 Conceitos praticados
- `document.getElementById()` para selecionar elementos por ID.
- `.querySelector()` para selecionar elementos internos.
- `.classList.add()` e `.classList.remove()` para manipular classes.
- `.classList.contains()` para verificar estado de um elemento.
- Estruturas condicionais (`if / else`) para lógica de decisão.
- Passagem de parâmetros para funções (`alterarStatus(1)`).

## 📄 Observação
Este exercício é focado apenas em **JavaScript**.  
O HTML e o CSS já estavam prontos e serviram como base para manipulação via DOM.
