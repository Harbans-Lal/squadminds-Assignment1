//1> fecth api and render the data>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function getData(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts');
   let data = await response.json();
   rednerData(data);
}

getData();


function rednerData(data){
 data.slice(0,7).forEach(item => {
    let tBody = document.getElementById('tBody');
    let tr = document.createElement('tr');
    let data = `<td>${item.id} </td> 
    <td> ${item.title}</td> 
    <td>${item.body} </td>`;
    tr.innerHTML = data;
    tBody.appendChild(tr);
 })
}

//question no. 2  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..
let largerPal = 0;
for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        const product = i * j;
        // Check if product is a palindrome
        // Update the largest palindrome found
        let isPalin = numberIsPalin(product);
        
         if(isPalin && product > largerPal) {
            largerPal = product;
            
        }
    }
}
console.log('largest palindrom product is:',largerPal);

function numberIsPalin(n){
  let revNum = Number(n.toString().split('').reverse().join(''));
        if(revNum === n){
            return true;
        }else{
            return false;
        }
}

let isPalin = numberIsPalin(222);
if(isPalin){
    console.log("it is palin");
}else{
    console.log('it is not palin');
}


//4.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//triangular number is: 1, 3, 6, 10, 15, 21, 28, 36, 45...............
function generateTriangularNumber(n) {
    return (n * (n + 1)) / 2;
}

let num = generateTriangularNumber(10);

console.log(num);
let countDivisor = 0;
for(let i = 0; i<= num; i++){
    if(countDivisor===500){
        break;
    }else if(num % i === 0 ){
        countDivisor++; 
   }
}
console.log('divisor count is:',countDivisor);



//4.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let countDivisor2  =0;
let allTriNum = [];
function countTriNumDiv(n){ 
    for(let i=1; i<=n; i++){
        let sum = generateTriangularNumber(i);
        allTriNum.push(sum);
    }
}
countTriNumDiv(100);
console.log('total triangular numbers are>>>>>>>>',allTriNum);


let firstLargest = 0;
//count the total divisror>>>>>>>>>>>>>>>>>>>>>>
for(let val of allTriNum){
    if(countDivisor2===500){ 
       console.log("it has more than 500  divisors",firstLargest);
    }else{
        firstLargest = val
        countDivisor2 = 0
        for(i=1; i<=val; i++){
            if(val%i==0 ){
                countDivisor2++;
            }
        }
    }
}

console.log(' the triangular number is >>>>>>>>>>>>>' ,firstLargest);
console.log('count divisor>>>>>>>>>>>',countDivisor2);

// get  the number of  divisors>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let storeDivisor = [];
function finndDiviser(n){
    for(let i=1; i<= Math.sqrt(n); i++){
        if(n%i== 0){
            storeDivisor.push(i);
            if(n/i !==i){
                storeDivisor.push(n/i);
            }
        }
    }
    return storeDivisor;
}
let allDivOfTheNUm = finndDiviser(firstLargest);
console.log('all divisor number is>>>>>>>>>>', allDivOfTheNUm);



//factorization of the number>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>...
function primeFactorization(num) {
    const factors = [];

    for (let factor = 2; factor * factor <= num; factor++) {
        while (num % factor === 0) {
            factors.push(factor);
            num /= factor;
        }
    }

    if (num > 1) {
        factors.push(num);
    }
    return factors;
}


const factors = primeFactorization(firstLargest);
console.log("Prime factors of", firstLargest, "are:", factors);
