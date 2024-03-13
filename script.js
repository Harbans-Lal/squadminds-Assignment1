//1> fecth api and render the data>>>>>>>>>>>>>>>>>>>>>>>>>>>
async function getData(){
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts');
   let data = await response.json();
   rednerData(data);
}

getData();


function rednerData(data){
    
 data.forEach(item => {
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
        if(revNum == n){
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



//3.>>>>>>>>>>>>> largest product in the gridd>>>>>>>>>>>>>>>>>>>>>>>
let grid = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,40,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

console.log(grid);

let maxProd = 0;
for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 20; col++) {
    // Calculate products in all directions and track maximum
        const product  =grid[row][col] * grid[row][col];
        if(maxProd < product){
            maxProd = product;
        }
    }
   }
console.log('maxproduct of 20 *20 grid is:',maxProd);




//4.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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