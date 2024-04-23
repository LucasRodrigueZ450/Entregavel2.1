function gerarFibonacci() {
    // Captura a quantidade de termos digitados pelo usuário
    const quantidade = document.getElementById('quantidade').value;
  
    // Converte a quantidade para um número inteiro
    const quantidadeInt = parseInt(quantidade);
  
    // Gera a sequência de Fibonacci
    const fibonacciArray = calcularFibonacci(quantidadeInt);
  
    // Exibe a sequência na página
    document.getElementById('resultado').innerHTML = 'Sequência de Fibonacci: ' + fibonacciArray.join(', ');
  }
  
  // Função para calcular a sequência de Fibonacci
  function calcularFibonacci(quantidade) {
    const fibonacciArray = [0, 1]; // Inicializa com os dois primeiros termos da sequência
  
    for (let i = 2; i < quantidade; i++) {
      const termo = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(termo);
    }
  
    return fibonacciArray.slice(0, quantidade); // Retorna somente a quantidade de termos solicitados
  }
  