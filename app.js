//input 1,2,3,4,5....100

//computation
let i;

for(i = 0; i <=100; i++) {
  if(i % 3 && 5 === 0){
    console.log("Fizzbuzz")
  }else if (i % 3 === 0){
    console.log("Fizz")
  }else if (i % 5 === 0){
    console.log("Buzz")
  }else{
    console.log(i);
  }
} 
