class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Array(26).fill(0);
        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;

        for(let right = 0; right < s.length; right++){
            const idx = s.charCodeAt(right) - 65;
            count[idx]++;

            maxFreq = Math.max(maxFreq , count[idx]);

            const windowLen = right - left + 1;

            if(windowLen - maxFreq > k){
                count[s.charCodeAt(left) - 65]--;
                left++;
            }
            maxLen = Math.max(maxLen , right - left + 1);
        }
        return maxLen;
    }
}
