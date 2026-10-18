//linear search 


const linearSearch = (array, target) => {

    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i;
        }
    }

    return -1;

};

console.log(linearSearch([3, 2, 4, 5, 6, 3, 6, 3, 6], 4));
console.log(linearSearch([3, 2, 4, 5, 6, 3, 6, 3, 6], 9));
