
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix && matrix.length)
  {
    let array = [];
  for (let i=0;i<matrix.length;i++)
    if(i%2 !== 0)
      matrix[i].reverse();
  array=matrix[0];
for(let i=1; i<matrix.length;i++)  
    array=array.concat(matrix[i]);
//   array=matrix[0].concat(matrix[1]);
return array;
  }
  else return [];
}
