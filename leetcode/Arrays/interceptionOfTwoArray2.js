// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  //nums2 remove each element that matches nums1 and add to the new array.

  const hash = {};
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    hash[nums1[i]] = hash[nums1[i]] || 0;
    hash[nums1[i]]++;
  }

  for (let num of nums2) {
    if (hash[num]) {
      hash[num]--;
      console.log(num);
      result.push([num]);
    }
  }

  return result;
};
