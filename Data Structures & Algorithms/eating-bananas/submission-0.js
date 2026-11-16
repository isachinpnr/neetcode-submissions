class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);

        let answer = right;

        while(left <= right){
            let mid = Math.floor(( left + right) / 2);
            let totalHours = 0;

            for(let i = 0; i < piles.length; i++){
                totalHours += Math.ceil(piles[i]/mid);
            }
            if(totalHours <= h){
                answer = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return answer;
    }
}
