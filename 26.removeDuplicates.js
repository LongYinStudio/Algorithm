/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    if (result[result.length - 1] != nums[index]) {
      result.push(nums[index]);
    }
  }
  return result;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 测试用例有问题，已提ISSUE: https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/27421
