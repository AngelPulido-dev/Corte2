function calcular(operacion) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let resultado = '';
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado = 'Por favor ingresa números válidos.';
    } else {
      switch (operacion) {
        case '+':
          resultado = n1 + n2;
          break;    
        case '-':
          resultado = n1 - n2;
          break;
        case '*':
          resultado = n1 * n2;
          break;
        case '/':
          if (n2 === 0) {
            resultado = 'Error: No se puede dividir entre cero.';
          } else {
            resultado = n1 / n2;
          }
          break;
      }
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
  