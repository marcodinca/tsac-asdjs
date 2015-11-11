function ex_1_I(array)
{
	var i=0;
	var sum=0;
	var quit=false;
	while(i<array.length&&!quit)
	{
		if(array[i]>=0)
		{
			sum+=array[1];
		}
		else
		{
			quit=true;
		}
		i++;
	}
	return sum;
}

function ex_1_R(array)
{	
	if(array[0]<0)
	{
		return 0;
	}
	if(array.length==2)
	{
		return array[0]+array[1];
	}
	else
	{
		return array[0]+ex_1_R(array.slice(1,array.length));
	}
}

function ex_2_I(n)
{
	var sum=0;
	var num=1;
	for(var i=0;i<n;i++)
	{
		sum += num;
		num += 2;
	}
	return sum;
}

function ex_2_R(n,index)
{
	if(index<n)
	{
		return (2*index+1)+ex_2_R(n,(index+1));
	}
	else
	{
		return 0;
	}

}

function ex_3_I(array)
{
	var sum=0;
	for(var i=0;i<10/*o array.length?*/;i++)
	{
		sum+=array[i];
	}
	
	return (sum/10) //o array.length?
}

function ex_3_R(array, index)
{
	if(index==0)
	{	
		var sum = array[0]+ex_3_R(array.slice(1,array.length),(index+1));
		return sum/10;
	}
	else if(index<10)
	{
		return array[0]+ex_3_R(array.slice(1,array.length),(index+1));
	}
	else
	{
		return 0;
	}
}

function ex_4_I(a, b)
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

function ex_4_R(a, b, i)
{
	if(a<b)
	{
		return ex_4_R(a+1,b,i+a);
	}
	else if(b<a)
	{
		return ex_4_R(a,b+1,i+a);
	}
	else
	{
		return i+a;
	}
}

function ex_5_I(a, b)
{
	var mul=0;
	for(var i=0;i<b;i++)
	{
		mul+=a;
	}
	return mul;
}

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

function ex_8_R(array, n)
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

function Ex_10_I(a, b)
{
	var array = new Array(b);
	for(var i=0;i<b;i++)
	{
		array[i]=a;
	}
	return array;
}

function ex_11_I(array)
{
	var pari = new Array();
	var dispari = new Array();
	var p=0;
	var d=0;
	for(var i=0;i<array.length;i++)
	{
		if(array[i]%2==0)
		{
			pari[p]=array[i];
		}
		else
		{
			dispari[d]=array[i];
		}
	}
	for(var i=0;i<array.length;i++)
	{
		for(int j=0;j<dispari.length;j++)	
		{
			array
		}
	}
}
