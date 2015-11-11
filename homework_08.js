function fillIterativo(array, n)
{
	var ris=new Array(n);
	for(var i=0;i<n;i++)
	{
		ris[i] = new Array(n);
	}
	var k=0;
	for(var i=0;i<n;i++)
	{
		for(var j=0;j<n;j++)
		{
			ris[j][i] = array[k];
			k++;
		}	
	}
	return ris;
}

var ris = fillIterativo([2,4,4,2],2);
console.log(ris[0][0])
console.log(ris[0][1])
console.log(ris[1][0])
console.log(ris[1][1])