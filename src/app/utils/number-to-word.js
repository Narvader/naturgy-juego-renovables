function humanize(num){
  var ones = ['', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
              'diez', 'one', 'doce', 'trece', 'catorce', 'quince', 'dieciseis',
              'diecisiete', 'dieciocho', 'diecinueve'];
  var tens = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta',
              'noventa'];

  var numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'cero';

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' cientos';
    else
      return ones[numString[0]] + ' ciento y ' + convert(+(numString[1] + numString[2]));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' cientos';
    if (end < 100) return ones[numString[0]] + ' ciento y ' + convert(end);
    return ones[numString[0]] + ' ciento ' + convert(end);
  }
}


export { humanize }