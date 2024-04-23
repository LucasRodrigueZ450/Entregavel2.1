function calcularSomatorio() {
    // Captura o valor do input
    const numerosStr = document.getElementById('numeros').value;
  
    // Separa os números pela vírgula e converte para um array de números
    const numerosArray = numerosStr.split(',').map(numeroStr => parseInt(numeroStr.trim()));
  
    // Calcula o somatório dos números
    const somatorio = numerosArray.reduce((total, numero) => total + numero, 0);
  
    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = 'O somatório é: ' + somatorio;
  }
  