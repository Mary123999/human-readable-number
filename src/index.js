module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return ones[number];
    }
    if (number < 20){
        return tens[number - 10]; // индекс
    }
    if (number < 100){
        const ten = Math.floor (number / 10);
        const ost = number % 10;
        return twens [ten - 2] + (ost ? ' ' + ones[ost] : '');
    }
    if (number < 1000) {
        const hundred = Math.floor (number / 100);
        const ostt = number % 100;
        return ones [hundred] + ' hundred'  + (ostt ? ' ' + toReadable(ostt) : '');
        

}
}

 

