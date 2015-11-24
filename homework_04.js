function Stack() {
    this.array = [];
}
Stack.prototype.push = function(e){this.array.push(e);}
Stack.prototype.pop = function() {return this.array.pop();}
Stack.prototype.peek = function() {return this.array[this.array.length-1];}
Stack.prototype.isEmpty = function() {return this.array.length==0;}


function rpn(s)
{
    var stackN = new Stack();
    s = s.split(" ");
    s.forEach( item => {
            switch(item)
            {
                case "+": 
			var sup1 = stackN.pop(); 
			var sup2 = stackN.pop(); 
			stackN.push(sup2+sup1);
                    break;
                case "-": 
			var sup1 = stackN.pop(); 
			var sup2 = stackN.pop(); 
			stackN.push(sup2-sup1);
                    break;
                case "*": 
			var sup1 = stackN.pop(); 
			var sup2 = stackN.pop(); 
			stackN.push(sup2*sup1);
                    break;
                case "/": 
			var sup1 = stackN.pop(); 
			var sup2 = stackN.pop(); 
			stackN.push(sup2/sup1);
                    break;
		default:
			stackN.push(item);
            }
    });
    return stackN.peek();
}
console.log(rpn("3 4 * 2 -"));