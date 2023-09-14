/*
1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
*/

//Fungsi ini digunakan untuk sorting input array menjadi descending order
function sortArray(userInput) {
  const sortedNumber = [];
  const n = userInput.length - 1;
  for (let i = n; i >= 0; i--) {
    let max = userInput[i];
    let maxIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (userInput[j] > max) {
        max = userInput[j];
        maxIndex = j;
      }
    }
    [userInput[i], userInput[maxIndex]] = [userInput[maxIndex], userInput[i]];
    sortedNumber[sortedNumber.length] = max;
  }
  return sortedNumber;
}

// Export sortArray function agar dapat di import di dalam file soalno1.test.js
module.exports = { sortArray };

//Test:
// console.log(sortArray([1, 2, 4, 3, 5, 3, 2, 1])); // Output: [5, 4, 3, 3, 2, 2, 1, 1]
