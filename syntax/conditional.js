var args = process.argv;
console.log(args);
console.log('A');
console.log('B');
// node를 실행시킬 때 뒤에 적는거가 args에 추가됨
if (args[2] === 'son') {
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');
