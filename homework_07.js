function ex_7_I(a, b)
{
	var mul=0;
	for(var i=0;i<b;i++)
	{
		mul+=a;
	}
	return mul;
}

function ex_7_R(a, b)
{
	var ris=1;	
	for(var i=0;i<b;i++)
	{
		ris = ex_7_R(ris, a);
	}
	return ris;
}

console.log(powIterativo(2,3));
