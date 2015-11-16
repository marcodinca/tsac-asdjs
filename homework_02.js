function ex_1_F(array)
{
   var array2 = [];
   var i=0;
   array.every(function(x){if(x>0){array2[i]=x;i++;return true;}else{return false;}});
   return array2.reduce(function(acc, x){return acc+x},0);
}

function ex_2_F(n)
{
   var array = [];
   var j=1;
   for(var i=0;i<n;i++)
   {
 	array[i] = j;
	j+=2;
   }
   return array.reduce(function(acc, x){return acc+x},0);
}

function ex_3_F(array)
{	
   return array.reduce(function(acc, x){return acc+x},0)/(array.length);
}

function ex_4_F(a, b)
{
   if(a>b)
   {
       var sup=a;
       a = b;
       b=sup;
   }

   var array = new Array((b-a+1));
   for(var i=0;i<array.length;i++)
   {
       array[i] = a+i;
   }
   return array.reduce(function(acc, x){return acc+x},0);
}

function ex_5_F(a, b)
{
   var array = new Array(b);
   for(var i=0;i<b;i++)
   {
      array[i]=a;
   }
   return array.reduce(function(acc, x){return acc+x},0);
}

function ex_6_F(a, b)
{
}

function ex_7_F(a, b)
{
   var array = new Array(b);
   for(var i=0;i<b;i++)
   {
      array[i]=a;
   }
   return array.reduce(function(acc, x){return acc*x;},1);
}

function ex_8_F(array, n)
{
   var arrayn = new Array(n);
   for(var i=0;i<n;i++)
   {
      arrayn[i] = new Array(n);
   }
}

function ex_9_F(array)
{
}

function ex_10_F(a, n)
{  
}

function ex_11_F()
{
}

