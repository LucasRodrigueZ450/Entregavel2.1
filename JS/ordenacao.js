function ordenarQuicksort() {
    // Captura os números digitados pelo usuário
    const numerosStr = document.getElementById('numeros').value;
  
    // Converte os números para um array de inteiros
    const numerosArray = numerosStr.split(',').map(numeroStr => parseInt(numeroStr.trim()));
  
    // Ordena o array utilizando o método Quicksort
    const numerosOrdenados = quicksort(numerosArray);
  
    // Exibe o array ordenado na página
    document.getElementById('resultado').innerHTML = 'Array ordenado: ' + numerosOrdenados.join(', ');
  }
  
  // Implementação do algoritmo Quicksort
  function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  