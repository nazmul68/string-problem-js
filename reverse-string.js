// function reverseString(text){
//     let reversed = '';
//     for(let i = text.length-1 ; i >= 0 ; i--){
//         const element = text[i];
//         console.log(element);
//         reversed = reversed+element;
//         console.log(element,reversed);
//     }
   
//     return reversed;
    
// }

// const myString ='I am a good boy You know';
// const reversed = reverseString(myString);
// console.log(reversed);





////////////////******************************///////////////// try another way its also called split way , the thing is call everybody dont call it split way . I as well as some people like me are called it split way . Thats why I call ... ha ha ha


function reverseString(text){
    let reversed = text.split('');
    const result = [];
    for(let i = text.length -1; i >=0 ; i--){
        const element= text[i];
        // console.log(element);
        result.push(element);

    }
    // console.log(result);
    const resultReversed = result.join('');
    console.log(resultReversed);

}

const myString  = 'I am a good boy';
const reversed = reverseString(myString);