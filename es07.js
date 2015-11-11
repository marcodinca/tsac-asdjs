function mul(a, b)
{
	var mul=0;
	for(var i=0;i<b;i++)
	{
		mul+=a;
	}
	return mul;
}

function powIterativo(a, b)
{
	var ris=1;	
	for(var i=0;i<b;i++)
	{
		ris = mul(ris, a);
	}
	return ris;
}

function powRicorsivo(a, b)
{
	//TODO
}

console.log(powIterativo(2,3));