function ex_1_A(a)
{
    if(a.length==0)
    {
        return 10;
    }
    else
    {
        return 5*a[0]*t(a.splice(1));
    }
}

function ex_1_B(a)
{
    if(a.length==0)
    {
        return 0;
    }
    else
    {
        if (a[0]%2)
        {
            return Math.pow(a[0], 2) + innerPower(a.splice(1));
        }
        else
        {
            return innerPower(a.splice(1));
        }
    }
}

function ex_2_A(a)
{
    var filtered = a.filter(function(val,index){
                                                return index%2==0;
                                                });
    var powered = filtered.map(function(val){return Math.pow(val,2)});
    return powered.reduce(function(add,x){return add+x});
}

function Stack() {
    this.array = [];
}
Stack.prototype.push = function(e){this.array.push(e);}
Stack.prototype.pop = function() {return this.array.pop();}
Stack.prototype.peek = function() {return this.array[this.array.length-1];}
Stack.prototype.isEmpty = function() {return this.array.length==0;}

function ex_3_A(a)
{
    var even = new Stack();
    var uneven = new Stack();
    for(var i=0; i<a.length ;i++)
    {
        if(a[i]%2==0)
        {
            even.push(a[i]);
        }
        else
        {
            uneven.push(a[i]);
        }
    }

    var add = new Stack();
    while(!(even.isEmpty()||uneven.isEmpty()))
    {
        add.push( even.pop()*uneven.pop() );
    }
    while(!even.isEmpty())
    {
        add.push(even.pop());
    }
    while(!uneven.isEmpty())
    {
        add.push(uneven.pop());
    }

    return add.array.reduce(function(add,x){return add+x;});
}














