// Write a function that returns the largest number in an array.
const findLargestNumberArr = (arr) => {
    if (arr.length === 0)
        return undefined;
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};
console.log(findLargestNumberArr([]));
export {};
//# sourceMappingURL=findLargestNumberArr.js.map