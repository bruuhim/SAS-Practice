let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];

function chck(nmbr) {
  let start = 0;
  let end = ids.length - 1;
  let i;
  while (start < end) {
    if (ids[start] == nmbr) {
      i = start;
      break;
    } else if (ids[end] === nmbr) {
      i = end;
      break;
    } else {
      i = -1;
    }
    start++;
    end--;
  }
  return i;
}
console.log(chck(15));
console.log(chck(61));
console.log(chck(70));