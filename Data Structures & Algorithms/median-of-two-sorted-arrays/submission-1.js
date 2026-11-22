class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
      const nums3 = nums1.concat(nums2);
      const n = nums3.length;
      nums3.sort((a , b) => a - b);
    const mid = Math.floor(n / 2);

    if(n % 2 === 1){
        return nums3[mid];
    }else{
        return (nums3[mid - 1] + nums3[mid]) / 2;
    }
}
}
