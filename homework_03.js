function Stack() {
    this.array = [];  
}
Stack.prototype.push = function(e){this.array.push(e);}
Stack.prototype.pop = function() {return this.array.pop();}
Stack.prototype.peek = function() {return this.array[this.array.length-1];}
Stack.prototype.isEmpty = function() {return this.array.length==0;}

function dec2bin(n)
{
    var s = new Stack();
    var ris = '';
    while(n!=0)
    {	
        s.push(n%2); 
	n = Math.floor(n/2);       
    }
    
    while(!s.isEmpty())
    {
        ris += s.pop().toString();
    }
    return ris;
}

