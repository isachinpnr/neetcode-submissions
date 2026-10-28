class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const digit = board[r][c];

                if(digit === '.') continue;

                const boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                const rowKey = `row-${r}-${digit}`;
                const colKey = `col-${c}-${digit}`;
                const boxKey = `box-${boxId}-${digit}`;

                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false;
                }
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
