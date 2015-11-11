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

var array = [2,4,6,2,4,6,2,4,6,4];
console.log(avgIterativo(array));
console.log(avgRicorsivo(array,0));
