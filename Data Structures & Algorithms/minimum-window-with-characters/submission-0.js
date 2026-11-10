class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length === 0 || s.length < t.length) return "";

        const need = new Map();

        for(const ch of t){
            need.set(ch , (need.get(ch) || 0) + 1);
        }
         
         const window = new Map();
         let formed = 0;
         const required = need.size;

         let left = 0;
         let bestLen = Infinity;
         let bestLeft = 0;

         for(let right = 0; right < s.length; right++){
            const ch = s[right];
            window.set(ch , (window.get(ch) || 0) + 1);

            if(need.has(ch) && window.get(ch) === need.get(ch)){
                formed++;
            }
            while(formed === required){
                const windowLen = right - left + 1;
                if(windowLen < bestLen){
                    bestLen = windowLen;
                    bestLeft = left;
                }
                const leftCh = s[left];
                window.set(leftCh, window.get(leftCh) - 1);

                if(need.has(leftCh) && window.get(leftCh) < need.get(leftCh)){
                    formed--;
                }
                left++;
            }
         }
         return bestLen === Infinity ? "" : s.slice(bestLeft , bestLeft + bestLen);
    }
}
