function mulIterativo(a, b)
{
	var mul=0;
	for(var i=0;i<b;i++)
	{
		mul+=a;
	}
	return mul;
}

function mulRicorsivo(a, b)
{
	//TODO
}
console.log(mulIterativo(5, 3));