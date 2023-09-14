/* 
2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1
*/

function maxSubArray(userInput, num) {
  if (num > userInput.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += userInput[i];
  }
  tempSum = maxSum;
  for (let i = num; i < userInput.length; i++) {
    tempSum = tempSum - userInput[i - num] + userInput[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Export maxSubArray function agar dapat di import di dalam file soalno2.test.js
module.exports = { maxSubArray };

// Test:
// console.log(maxSubArray([100, 200, 300, 400], 2)); // Output: 700
// console.log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
// console.log(maxSubArray([-3, 4, 0, -2, 6, -1], 2)); // Output: 5
