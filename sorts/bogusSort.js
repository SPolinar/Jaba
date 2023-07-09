function bugusSort(array){
    
    let a=0; let b=0;
    let i=0;
    while (i < array.length-1) {
        if (array[i]>array[i+1]) {
            a = array[i+1];
            b = array[i];
            array[i]=a;
            array[i+1]=b;
            i=0;   
         } else {
           i=i+1;
           }
     }
        return array;
}
module.exports = {
    bugusSort
}