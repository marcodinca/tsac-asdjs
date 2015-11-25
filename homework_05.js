function QueueItem(c,p)
{
    this.contenuto = c;
    this.priorita = p;
}
function PriorityQueue()
{
    this.array = [];
}
PriorityQueue.prototype.enqueue = function(e) {
                                                    var quit=false;
                                                    var i=0;
                                                    if(!this.isEmpty())
                                                    {
                                                        while (!quit)
                                                        {
                                                            if(i>=this.size())
                                                            {
                                                                quit=true;
                                                            }
                                                            else if (this.array[i].priorita > e.priorita)
                                                            {
                                                                quit = true;
                                                            }
                                                            else
                                                            {
                                                                i++;
                                                            }
                                                        }
                                                        this.array.splice(i, 0, e);
                                                    }
                                                    else
                                                        this.array.push(e);
                                                }
PriorityQueue.prototype.dequeue = function() {return this.array.pop();}
PriorityQueue.prototype.front = function() {return this.array[this.array.length-1];}
PriorityQueue.prototype.size = function() {return this.array.length;}
PriorityQueue.prototype.isEmpty = function() {return this.size()==0}

function PriorityQueueCallback(funzione)
{
    this.f = funzione
    this.array = [];
}
PriorityQueueCallback.prototype.enqueue = function(e) {
                                                    var quit=false;
                                                    var i=0;
                                                    if(!this.isEmpty())
                                                    {
                                                        while (!quit)
                                                        {
                                                            if(i>=this.size())
                                                            {
                                                                quit=true;
                                                            }
                                                            else if (this.f(this.array[i].priorita, e.priorita)==1)
                                                            {
                                                                quit = true;
                                                            }
                                                            else
                                                            {
                                                                i++;
                                                            }
                                                        }
                                                        this.array.splice(i, 0, e);
                                                    }
                                                    else
                                                        this.array.push(e);
                                                }
PriorityQueueCallback.prototype.dequeue = function() {return this.array.pop();}
PriorityQueueCallback.prototype.front = function() {return this.array[this.array.length-1];}
PriorityQueueCallback.prototype.size = function() {return this.array.length;}
PriorityQueueCallback.prototype.isEmpty = function() {return this.size()==0}

function CircularQueue(n)
{
    this.iterator = 0;
    this.max = n;
    this.array = [];
}
CircularQueue.prototype.enqueue = function (e) {
                                                if(this.size()<this.max)
                                                {
                                                    this.array.splice(this.iterator,0,e);
                                                    this.iterator++;
                                                    if(this.iterator>=this.max)
                                                    {
                                                        this.iterator=0;
                                                    }
                                                }
                                                }
CircularQueue.prototype.dequeue = function() {
                                                var sup = this.array[this.iterator];
                                                this.array.splice(this.iterator,1,null);
                                                return sup;
                                                }
CircularQueue.prototype.front = function() {return this.array[this.array.length-1];}
CircularQueue.prototype.size = function() {return this.array.length;}
CircularQueue.prototype.isEmpty = function() {return this.size()==0}