/*
#TASK:

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

sumOfDifferences([2, 1, 10])

Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0

#EXAMPLE:

describe("sumOfDifferences([1, 2, 10]", function() {
  Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);


describe("sumOfDifferences([-3, -2, -1])", function() {
  Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
});

*/

function sum(arr) {
  return arr.length <= 1
    ? 0 : arr.sort((a, b) => b - a).reduce((sum, element, index, arr) => {
      return index !== arr.length-1 ? sum + element - arr[index + 1] : sum + 0
    }, 0)
}
