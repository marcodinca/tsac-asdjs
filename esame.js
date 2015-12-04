function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}

var _0xd10d = ["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];
function evaluateExpr(callback) {
    return callback(_0xd10d[0]);
}

function esercizioRicorsione(array) {
    if (array.length == 0) {
        return 0;
    }
    else {
        if (array[0] == 5070) {
            return 1 + esercizioRicorsione(array.splice(1));
        }
        else {
            return 0 + esercizioRicorsione(array.splice(1));
        }
    }
}

function esercizioFunzionali(array) {
    var arrayPositiviPari = array.filter(function(x) {
        return (x >= 0 && x % 2 == 0);
    });
    var arrayPotenze = arrayPositiviPari.map(function(x) {
        return x * x;
    })
    var somma = arrayPotenze.reduce(function(acc,x) {
        return acc + x;
    });
    return Math.sqrt(somma);
}

function esercizioStack(operazione) {
    function Stack() {
        this.array = [];
    }
    Stack.prototype.push = function(e){ this.array.push(e); }
    Stack.prototype.pop = function() { return this.array.pop(); }
    Stack.prototype.peek = function() { return this.array[this.array.length - 1]; }
    Stack.prototype.isEmpty = function() { return this.array.length == 0; }

    operazione = operazione.split(" ");
    var stackV = new Stack();
    var stackS = new Stack();

    operazione.forEach(function(x) {
        if(x == ')') {
            var n1 = stackV.pop();
            var n2 = stackV.pop();
            var op = stackS.pop();
            var ris = 0;
            switch(op) {
                case '+': ris = n2 + n1;
                    break;
                case '-': ris = n2 - n1;
                    break;
                case '*': ris = n2 * n1;
                    break;
                case '/': ris = n2 / n1;
                    break;
            }
            stackV.push(ris);
        }
        else if(x == '+' || x == '-' || x == '*' || x == '/')
            stackS.push(x);
        else if(x != '(')
            stackV.push(parseInt(x));
    });
    return stackV.pop();
}

function esercizioTree(array) {
    function Node(i, left, right) {
        this.item = i;
        this.l = left;
        this.r = right;
    }

    function Tree() {
        this.root = null;
    }
    Tree.prototype.addNode = function(currentNode, newNode) {
        if (newNode.item < currentNode.item) {
            if (currentNode.l == null)
                currentNode.l = newNode;
            else
                this.addNode(currentNode.l, newNode);
        } else {
            if (currentNode.r == null)
                currentNode.r = newNode;
            else
                this.addNode(currentNode.r, newNode);
        }
    }
    Tree.prototype.add = function(item) {
        if (this.root == null) {
            this.root = new Node(item, null, null);
        } else {
            this.addNode(this.root, new Node(item, null, null));
        }
    }
    Tree.prototype.searchMax = function(node) {
        if(node.r == null)
            return node.item;
        else
            return this.searchMax(node.r);
    }

    var tree = new Tree();
    array.forEach(function(x){ tree.add(x) });
    return tree.searchMax(tree.root);
}