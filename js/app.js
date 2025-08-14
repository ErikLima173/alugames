function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let qtdJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    console.log(qtdJogosAlugados.length + 1);


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let resposta = confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`);
        if (!resposta) return;
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
