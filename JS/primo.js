function verificarPrimo() {
    // Captura o valor do input
    const numero = document.getElementById('numero').value;
  
    // Converte o valor para número inteiro
    const numeroInteiro = parseInt(numero);
  
    // Verifica se o número é primo
    if (isPrime(numeroInteiro)) {
      document.getElementById('resultado').innerHTML = numeroInteiro + ' é primo.';
    } else {
      document.getElementById('resultado').innerHTML = numeroInteiro + ' não é primo.';
    }
  }
  
  // Função para verificar se um número é primo
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  