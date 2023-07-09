function GnomeSort(array) {
    let a=0;
    for (let i=1; i < array.length; i+=1){
        if (array[i]<array[i-1]) {
             a=array[i];
             array[i]=array[i-1];
             array[i-1]=a;
             if (i>1) i=i-2;
        } 
    }
return array;
}
module.exports = {
    GnomeSort
}