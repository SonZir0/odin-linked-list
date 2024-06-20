import Node from './listNode.js';

export default class LinkedList {
    length = 0;
    headNode = null;
    tailNode = null;

    initWithNode(value) {
        this.headNode = new Node(value);
        this.tailNode = this.headNode;
        this.length++;
    }

    append(value) {
        if (!this.headNode) this.initWithNode(value);
        else {
            let temp = new Node(value);
            temp.prev = this.tailNode;
            this.tailNode.next = temp;
            this.tailNode = this.tailNode.next;
            this.length++;
        }
    }

    prepend(value) {
        if (!this.headNode) this.initWithNode(value);
        else {
            const temp = new Node(value);
            temp.next = this.headNode;
            this.headNode.prev = temp;
            this.headNode = temp;
            this.length++;
        }
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode;
    }

    tail() {
        return this.tailNode;
    }

    // indexation starts at 0 (like an array)
    at(index) {
        if (index < 0 || index >= this.length) return null;

        let temp = this.headNode;
        for (let i = 0; i < index; i++) temp = temp.next;
        return temp;
    }

    pop() {
        if (!this.headNode) return;
        else if (this.length === 1) {
            this.headNode = null;
            this.tailNode = null;
        } else if (this.tailNode) {
            this.tailNode = this.tailNode.prev;
            this.tailNode.next = null;
        }
        this.length--;
    }

    /*  almost the same operation, so we use functionality of find().
        Check for null instead of converting to Bool because find() may return falsy index 0    */
    contains(searchValue) {
        if (this.find(searchValue) === null) return false;
        return true;
    }

    // indexation starts at 0 (like an array)
    find(searchValue) {
        let index = 0;
        let currentNode = this.headNode;
        while (currentNode) {
            if (currentNode.data === searchValue) return index;
            currentNode = currentNode.next;
            index++;
        }
        return null;
    }

    toString() {
        let currentNode = this.headNode;
        let resultString = '';
        while (currentNode) {
            resultString += `( ${currentNode.data} ) -> `;
            currentNode = currentNode.next;
        }
        resultString += 'null';
        return resultString;
    }
}
