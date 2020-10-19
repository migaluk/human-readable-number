module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = 'hundred';
  let result = '';
  if (number > 99) {result += `${units[Math.floor(number / 100)]} ${hundreds}`};
    if (number % 100 > 19) {
        result += ` ${dozens[Math.floor(number % 100 / 10)]}`
        if(number % 10 !== 0) {
            result += ` ${units[Math.floor(number % 10)]}`;
        }
    }
    if (number % 100 <= 19 && number % 100 > 0) result += ` ${units[Math.floor(number % 100)]}`;

return result.trim();

}
