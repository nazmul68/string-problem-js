function getMinInArray(numbers){
    let lowest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        // console.log(element);
        if(element < lowest){
             lowest = element;
        }
    }
    return lowest;
}

const heights = [120,101,123,156,125,106,146,100];
const smallest = getMinInArray(heights);
console.log("The smallest person who's height is :" , smallest , "cm");