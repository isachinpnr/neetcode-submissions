class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let water = 0;
        let best = 0;

        while(left < right){
            water = (right - left) * Math.min(heights[left] , heights[right]);
            best = Math.max(water , best);

            if(heights[left] < heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return best;
    }
}
