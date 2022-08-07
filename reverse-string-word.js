function reverseWord(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length-1 ; i >= 0 ; i--){
        const element = words[i];
        // console.log(element);
        result.push(element);
        
    }
    const resultReversed = result.join(' ');
    console.log(resultReversed);
}


const myString = "I am a good boy";
const reversed = reverseWord(myString);
