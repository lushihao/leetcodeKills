/*
 * @Author: Shihao Lu 
 * @Date: 2021-03-13 21:04:13 
 * @Last Modified by: Shihao Lu
 * @Last Modified time: 2021-03-13 22:16:35
 */
// Z 字形变换
function convert(s: string, numRows: number): string {
    if (numRows === 1)
        {return s
    };
    console.log(s, numRows)
    const rows: string[] = new Array(numRows).fill("1");
    console.log(rows)

    const n = 2 * numRows - 2;
    for(let i = 0; i < s.length; i++) {
        console.log(i)
        const x = i % n;
        rows[Math.min(x, n - x)] += s[i];
        console.log(rows)

    }
    console.log(rows)
    return rows.join("");
};
let s = "AB"
let numRows = 1
convert(s, numRows)
export{}
