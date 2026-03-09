// Create a function that counts vowels in a string.
const totalVowels = (str: string): number => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let countVowel = 0;
    let convertToLowerCase = str.toLocaleLowerCase();
    for (let i = 0; i < convertToLowerCase.length; i++) {
        let countVowels = vowels.includes(convertToLowerCase[i]!)
        if (countVowels) {
            countVowel++
        }
    }
    return countVowel
}
console.log(totalVowels('apurbo'))