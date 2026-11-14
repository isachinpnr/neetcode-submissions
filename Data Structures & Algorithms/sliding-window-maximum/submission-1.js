class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
          let result = [];
    let deque = [];
    let head = 0;

    for(let i = 0; i < nums.length; i++){
        while(head < deque.length && deque[head] <= i - k){
            head++;
        }
        while(
            deque.length > head && 
            nums[deque[deque.length - 1]] <= nums[i]
        ){
            deque.pop();
        }

        deque.push(i);

        if(i >= k - 1){
            result.push(nums[deque[head]]);
        }
    }
    return result;
    }
}
