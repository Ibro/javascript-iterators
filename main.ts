function makeIterator(array) {
    let index = 0;

    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

let iterator = makeIterator(['coding', 'blast']);
console.log(iterator.next()); // [object Object] { done: false, value: "coding" }
console.log(iterator.next()); // [object Object] { done: false, value: "blast" }
console.log(iterator.next()); // [object Object] { done: true }


let numbers = [1, 2, 3];
let numbersIterator = numbers[Symbol.iterator]();

console.log(numbersIterator.next()); // {value: 1, done: false}
console.log(numbersIterator.next()); // {value: 2, done: false}
console.log(numbersIterator.next()); // {value: 3, done: false}
console.log(numbersIterator.next()); // {value: undefined, done: true}

for (let num of numbers) {
    console.log(num);
}
