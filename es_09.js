function ex_9_I(array)
{
	var supporto;
	for(var i=0;i<array.length/2;i++)
	{
		supporto = array[i];
		array[i] = array[array.length-i-1];
		array[array.length-i-1] = supporto;
	}
	return array;
}

var ris = invertIterativo([1,2,3,4,5]);

console.log(ris[0]);
console.log(ris[1]);
console.log(ris[2]);
console.log(ris[3]);
console.log(ris[4]);
