// const assertEqual = require('assert');  
// const { multiply } = require('../multiply'); 
//  ''
// describe('multiply', () => {
//   it('Should return 1 when multiplying 1 and 1', () => {
//     assertEqual(multiply(1, 1), 1);  
//   });
// });

 const assertEqual = require('assert');  
const { multiply } = require('../multiply'); 
describe('multiply',()=>{
    it('Should return 4 when when we multiply 2 times 2',()=>{
        assertEqual(multiply(2, 2),4)
    })
})
