/*  
Q.5.Write a program to display this pattern ?
******
*   *
*  *
* *
**
*
*/

let n = 6;
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= totalRows - i + 1; j++) {
    row += (i === 1 || j === 1 || j === totalRows - i + 1) ? '*' : ' ';
  }
  console.log(row);
} 
