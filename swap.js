 let first = 55;
 let second = 77;


 //---this is wrong approach---//
//  first = second;
//  second = first;

//--- right approach 1 -----//
// const temt = first;
// first = second;
// second = temt;


//--- right approach 2 -----Destructuring-----//
[first,second] = [second,first];

console.log(first,second);