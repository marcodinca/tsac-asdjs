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
    var primoOp = true;
    s = s.split(" ");
    for(var i=0;i<s.length;i++)
    {
        if(s[i]=="+"||s[i]=="-"||s[i]=="*"||s[i]=="/")
        {
            if(primoOp)
            {
                primoOp=false;
                stackN.array.reverse();
            }
            switch(s[i])
            {
                case "+": var sup1 = stackN.pop(); var sup2 = stackN.pop(); stackN.push(sup1+sup2);
                    break;
                case "-": var sup1 = stackN.pop(); var sup2 = stackN.pop(); stackN.push(sup1-sup2);
                    break;
                case "*": var sup1 = stackN.pop(); var sup2 = stackN.pop(); stackN.push(sup1*sup2);
                    break;
                case "/": var sup1 = stackN.pop(); var sup2 = stackN.pop(); stackN.push(sup1/sup2);
                    break;
            }
        }
        else
        {
            stackN.push(parseInt(s[i]));
        }
    }
    return stackN.pop();
}
/*
 function laroba(s)
 {
 var stackN = new Stack();
 var stackO = new Stack();
 var array = s.split("");

 for(var i=0;i<array.length;i++)
 {
 if(array[i]=="+"||array[i]=="*"||array[i]=="-"||array[i]=="/")
 {
 stackO.push(array[i]);
 }
 else
 {
 stackN.push(parseInt(array[i]));
 }
 }
 stackN.array.reverse();
 stackO.array.reverse();
 while(!stackO.isEmpty())
 {
 var n1 = stackN.pop();
 var n2 = stackN.pop();
 var op = stackO.pop();
 var ris;

 switch(op)
 {
 case "+": ris=n1+n2;
 break;
 case "-": ris=n1-n2;
 break;
 case "*": ris=n1*n2;
 break;
 case "/": ris=n1/n2;
 break;
 }
 stackN.push(ris);
 }
 return stackN.pop();
 }
 */