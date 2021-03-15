module.exports = function toReadable(number) {
  const str = number.toString();
  if (parseInt(str) === 0) {
    return 'zero';
  }

  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const words = [];
  const integers = str.split('').reverse().map(parseFloat);
  if (integers[1] === 1) {
    integers[0] += 10;
  }

  let word = units[integers[0]];
  if (word) {
    words.push(word);
  }

  word = tens[integers[1]];
  if (word) {
    words.push(word);
  }

  word = units[integers[2]];
  if (word) {
    words.push(word + ' hundred');
  }

  return words.reverse().join(' ');
}
