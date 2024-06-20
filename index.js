import LinkedList from './linkedList.js';

let test = new LinkedList();
console.log('\nEmpty list at the start:\n', test.toString());
test.append(10);
test.append(20);
console.log('\nList after 2 appends:\n', test.toString());

test.prepend(5);
test.prepend(-10);
console.log('\nList after 2 prepends"\n', test.toString());

console.log(`\nList size: ${test.size()}`);
console.log(`\nHead: \n`, test.head());
console.log(`\nTail: \n`, test.tail());

console.log(`\nNode at index 2: \n`, test.at(2));

test.pop();
console.log(`\nAfter pop() list size is ${test.size()}\n`, test.toString());

let searchValue = -10;
console.log(
    `\nList contains value ${searchValue}: `,
    test.contains(searchValue)
);
console.log(`Index of value ${searchValue}: `, test.find(searchValue));

console.log(test.toString());
