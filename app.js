class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        //start with an empty first node, this indicates the top of the stack
        this.top = null;
    }

    push(data) {
        //if the stack is empty, the node will be on top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //if the stack already has something, then create a new node, add data 
        //to the new node, and have the pointer point to the top
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        //In order to remove the top of the stack, you have to point the pointer
        //to the next item and that next item becomes the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    //see the top of the stack without removing it
    return stack.top.value;
}

function isEmpty(stack) {
    //check if the stack is empty or not
    if (stack.top == null) {
        return true
    }
    return false
}

function display(stack) {
    let top = stack.top - 1; //because top points to index where new element is to be inserted
    while (top >= 0) {
        //print upto 0th index
        console.log(stack.data[top]);
        top--;
    }
}

function main() {
    let starTrek = new Stack();
    // let insertion = ['Kirk', 'Spock', 'McCoy', 'Scotty']
    // insertion.map((item) => starTrek.push(item))
    // console.log(starTrek)
    starTrek.push('Kirk')
    starTrek.push('Spock')
    // console.log(starTrek)
    starTrek.push('McCoy')
    starTrek.push('Scotty')
    // console.log(starTrek)
    display(starTrek);
}

main();

