function bubbleSort (array){
let a=0;
    for (let i=0; i < array.length; i+=1){
        for (let j=array.length-1; j>i; j-=1){
            if (array[j]<array[j-1]) {
                a=array[j];
                array[j]=array[j-1];
                array[j-1]=a;
    
            }
        }
    } 
    return array;
}
module.exports = {
    bubbleSort
}