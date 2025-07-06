// const assertEqual = require('assert');  
// const { multiply } = require('../multiply'); 
//  ''
// describe('multiply', () => {
//   it('Should return 1 when multiplying 1 and 1', () => {
//     assertEqual(multiply(1, 1), 1);  
//   });
// });



// const assertEqual = require('assert');  
// const { multiply } = require('../multiply'); 
// describe('multiply',()=>{
//     it('Should return 4 when when we multiply 2 times 2',()=>{
//         assertEqual(multiply(2, 2),4)
//     })
// })



// const assertEqual = require('assert');  
// const { multiply } = require('../multiply');
// describe('multiply',()=>{
//     it('should return 9 when we muliply 3 times 3',()=>{
//        assertEqual(multiply(3, 3), 9) 
//     })
// })


const assertEqual = require('assert');  
const { multiply } = require('../multiply');
describe('multiply',()=>{
    it('should return 16 when we muliply 4 times 4',()=>{
       assertEqual(multiply(4, 4), 16) 
    })
})

