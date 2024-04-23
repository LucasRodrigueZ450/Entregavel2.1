function calcularMDC() {
    // Captura os valores dos inputs
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
  
    // Converte os valores para números inteiros
    const numero1Int = parseInt(numero1);
    const numero2Int = parseInt(numero2);
  
    // Calcula o MDC utilizando o algoritmo de Euclides
    const mdc = calcularEuclides(numero1Int, numero2Int);
  
    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = 'O MDC de ' + numero1Int + ' e ' + numero2Int + ' é: ' + mdc;
  }
  
  // Função para calcular o MDC utilizando o algoritmo de Euclides
  function calcularEuclides(a, b) {
    if (b === 0) {
      return a;
    } else {
      return calcularEuclides(b, a % b);
    }
  }
  