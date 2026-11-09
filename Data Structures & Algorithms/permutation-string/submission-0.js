class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
     checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;

  const need = new Array(26).fill(0);
  const window = new Array(26).fill(0);

  for (const ch of s1) {
    need[ch.charCodeAt(0) - 97]++;
  }

  let left = 0;
  let matches = 0;
  // Count how many letters have matching frequencies (initially: the empty ones)
  for (let i = 0; i < 26; i++) {
    if (need[i] === window[i]) matches++;
  }

  for (let right = 0; right < s2.length; right++) {
    // Add s2[right] to the window
    const rIdx = s2.charCodeAt(right) - 97;
    window[rIdx]++;

    if (window[rIdx] === need[rIdx]) {
      matches++;
    } else if (window[rIdx] === need[rIdx] + 1) {
      matches--;
    }

    // Shrink if window is too long
    if (right - left + 1 > s1.length) {
      const lIdx = s2.charCodeAt(left) - 97;
      window[lIdx]--;

      if (window[lIdx] === need[lIdx]) {
        matches++;
      } else if (window[lIdx] === need[lIdx] - 1) {
        matches--;
      }

      left++;
    }

    if (matches === 26) return true;
  }

  return false;
}
}
