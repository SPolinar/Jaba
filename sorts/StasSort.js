function StasSort(array){
    let a=0;
    for (let i=0; i < array.length; i+=1){
        for (let j=i; j < array.length; j+=1){
            if (array[j]<array[i]) {
                a=array[i];
                array[i]=array[j];
                array[j]=a;
        
            }
        }
    } 
    return array;
}
module.exports = {
    StasSort
}