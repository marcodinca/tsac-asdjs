function fillIterativo(a, b)
{
	var array = new Array(b);
	for(var i=0;i<b;i++)
	{
		array[i]=a;
	}
	return array;
}

var ris = fillIterativo(1,3);
console.log(ris[0]);
console.log(ris[1]);
console.log(ris[2]);