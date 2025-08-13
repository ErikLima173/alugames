function alterarStatus(id) { // Função para alternar entre "alugado" e "disponível" para um jogo
  const item = document.getElementById(`game-${id}`); // Seleciona o <li> do jogo pelo id
  const imagem = item.querySelector('.dashboard__item__img'); // Seleciona a div que contém a imagem do jogo
  const botao = item.querySelector('.dashboard__item__button'); // Seleciona o botão de ação do jogo

  const estaAlugado = imagem.classList.contains('dashboard__item__img--rented'); // Verifica se a imagem já está com a classe que indica "alugado"

  if (estaAlugado) {
    imagem.classList.remove('dashboard__item__img--rented'); // Remove a classe de imagem opaca (volta para "disponível")
    botao.textContent = 'Alugar'; // Define o texto do botão como "Alugar"
    botao.classList.remove('dashboard__item__button--return'); // Remove a classe que estiliza o botão como "Devolver"
  } else {
    imagem.classList.add('dashboard__item__img--rented'); // Adiciona a classe de imagem opaca (marca como "alugado")
    botao.textContent = 'Devolver'; // Define o texto do botão como "Devolver"
    botao.classList.add('dashboard__item__button--return'); // Adiciona a classe que estiliza o botão como "Devolver"
  }
}
