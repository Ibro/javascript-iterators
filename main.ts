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
