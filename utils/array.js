function checkArraySort (array){
    for (let i=0; i < array.length-1; i+=1){
        if (array[i+1]<array[i]) {
            return false;
        } 
    }
    return true;
}
module.exports = {
    checkArraySort
}