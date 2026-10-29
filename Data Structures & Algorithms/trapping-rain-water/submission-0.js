class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = 0;
        let maxRight = 0;
        let water = 0;

        while(left < right){
            if(height[left] < height[right]){
                maxLeft = Math.max(maxLeft , height[left]);
                water += maxLeft - height[left];
                left++;
            }else{
                maxRight = Math.max(maxRight , height[right]);
                water += maxRight - height[right];
                right--;
            }
        }
        return water;
    }
}
