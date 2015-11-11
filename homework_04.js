function sumIterativa(a, b)
{
	var sum=0;
	if(a>b)
	{
		for(var i=(b+1);i<a;i++)
		{
			sum+=i;
		}
		return sum;
	}
	else if(b>a)
	{
		for(var i=(a+1);i<b;i++)
		{
			sum+=i;
		}
		return sum;
	}
	else if(b==a)
	{
		return 0;
	}
}

function sumRicorsiva(a, b, index)
{
	//TODO
}

console.log(sumIterativa(1,4));