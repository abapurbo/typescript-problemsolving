// Write a function that reverses a string.
const reverseStr = (str: string): string => {
    let reverses = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverses += str[i];
    }
    return reverses;
}
console.log(reverseStr('apurbo'))