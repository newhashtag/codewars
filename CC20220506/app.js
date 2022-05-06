/* 
TASK: 
Given two integer arrays a, b, both of length >= 1,
create a program that returns true if
the sum of the squares of each element in a is strictly greater than
the sum of the cubes of each element in b.

EXAMPLE:
arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
Test.assertEquals(arrayMadness([2,3,4],[1,2,3]), false);
Test.assertEquals(arrayMadness([1,2,3],[0,1,2]), true);
Test.assertEquals(arrayMadness([4,5,6],[3,4,5]), false);
*/

function arrayMadness(a, b) {
  return a.reduce((sum, x) => sum + x**2, 0) > b.reduce((sum, x) => sum + x**3, 0)
}