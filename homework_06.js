function merge(array1, array2)
{
    var arrayResult = [];
    var i1=0;
    var i2=0;
    while(i1<array1.length||i2<array2.length)
    {
        if(array1[i1]>=array2[i2])
        {
            arrayResult.push(array2[i2]);
            i2++;
        }
        else
        {
            arrayResult.push(array1[i1]);
            i1++;
        }
    }
    return arrayResult;
}
