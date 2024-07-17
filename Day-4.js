//Activity 1 

//Task 1
for(let i=1;i<=10;i++){
  console.log(i)
}
console.log("Next Task")

//Task 2
let num = 5;
for(let i=1;i<=10;i++){
  console.log(num*i)
}
console.log("Next Task")

//Activity 2

//Task 3
let sum = 0
let i = 0
while(i<=10){
  sum+=i
  i++
}
console.log(sum)
console.log("Next Task")

//Task 4
let idx = 10
while(idx>=1){
  console.log(idx)
  idx--
}
console.log(idx)
console.log("Next Task")

//Activity 3

//Task 5
let index = 1;
do {
    console.log(index);
    index++;
} while (index <= 5);
console.log("Next Task")

//Task 6
let number = 5;
let factorial = 1;
let ia = number;
do {
    factorial *= ia;
    ia--;
} while (ia > 0);
console.log(factorial);
console.log("Next Task")

//Activity 4

//Task 7
let rows = 4

for (let i=1; i<=rows; i++) {
    str = ''
    for (let j=1; j<=i; j++) {
        str += '* '
    }
    console.log(str);
}
console.log("Next Task")

//Activity 5

//Task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}
console.log("Next Task")

//Task 9
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
      break;
  }
  console.log(i);
}
