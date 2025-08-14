function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let qtdJogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    console.log(qtdJogosAlugados.length + 1);


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let resposta = confirm('Tem certeza que quer continuar?');
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
