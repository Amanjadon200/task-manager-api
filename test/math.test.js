const { calculateTip, convertFahToCel, convertCelToFah, sum } = require("../src/math");
// test('calculate tip with tip', () => {
//     expect(calculateTip(100, 5)).toBe(105);
// });
// test('calculate tip with default tip', () => {
//     expect(calculateTip(100)).toBe(103);
// });
// test('should convert 32F to 0',()=>{
//     expect(convertFahToCel(32)).toBe(0);
// })
// test('should convert 0C to 32F',()=>{
//     expect(convertCelToFah(0)).toBe(32);
// })
// test('add two numbers',(done)=>{
//     sum(2,3).then((sum)=>{
//         expect(sum).toBe(5);
//         done();
//     })
// })
test('add two numbers using async await ',async()=>{
    const p=await sum(2,3)
        expect(p).toBe(5);
    })