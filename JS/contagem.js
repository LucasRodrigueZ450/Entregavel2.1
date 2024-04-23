function contarValoresInteiros() {
    // Captura os valores de início e fim inseridos pelo usuário
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;
  
    // Converte os valores para números inteiros
    const inicioInt = parseInt(inicio);
    const fimInt = parseInt(fim);
  
    // Conta os valores inteiros entre os números de início e fim
    const contador = contarInteiros(inicioInt, fimInt);
  
    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = 'Quantidade de valores inteiros entre ' + inicioInt + ' e ' + fimInt + ': ' + contador;
  }
  
  // Função para contar os valores inteiros entre dois números
  function contarInteiros(inicio, fim) {
    let contador = 0;
  
    for (let i = inicio; i <= fim; i++) {
      contador++;
    }
  
    return contador;
  }
  