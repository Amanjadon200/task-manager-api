const calculateTip = (amount, tip = 3) => amount + (tip / 100 * amount);
const convertFahToCel = (f) => ((f - 32) * 5) / 9;
const convertCelToFah = (c) => 1.8 * c + 32;
const sum = (a, b) => {
    return new Promise(function (resolve, reject) {
        resolve(a + b);
    });
};
module.exports = { calculateTip, convertFahToCel, convertCelToFah, sum };