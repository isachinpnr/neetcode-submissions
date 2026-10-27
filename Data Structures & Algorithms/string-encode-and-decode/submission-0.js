class Solution {
  encode(strs) {
    let result = "";
    for (const str of strs) {
      result += str.length + "#" + str;
    }
    return result;
  }

  decode(s) {
    const result = [];
    let i = 0;

    while (i < s.length) {
      let j = i;
      while (s[j] !== "#") {
        j++;
      }

      const length = parseInt(s.slice(i, j));
      const start = j + 1;
      const str = s.slice(start, start + length);
      result.push(str);
      i = start + length;
    }

    return result;
  }
}