// function getMax(num1,num2,num3){
//     if(jim> dela && jim > chinku){
//         console.log('Jim get the cake');
//     }
//     else if(dela>jim && dela > chinku){
//         console.log('Dela get the cake');
//     }
//     else{
//         console.log('Chinku get the cake');
//     }
// }
// const jim = 90;
// const dela = 92;
// const chinku = 95;
// getMax(jim,dela,chinku);






// //------- using Math.min or max -------// //


 const jim = 90;
 const dela = 92;
 const chinku = 95;
function getMax(num1,num2,num3){
    console.log('First position who get:', Math.max(num1,num2,num3));
    console.log('Last position who get:', Math.min(num1,num2,num3));

 
}
getMax(jim,dela,chinku);
