function getRandomNumber (min=0, max=100){
    if (min>max) {
        return null
    }
    return Math.round((Math.random()*(max-min)+min));
}
function getRandomArray (length, min=0, max=50){
    const a=[];
    for (let i=0; i < length; i+=1){
        a[i]= getRandomNumber(min,max);
    }
    return a;
}
module.exports = {
    getRandomNumber, getRandomArray
}