# squadminds-Assignment1
Assignment
 Assignment
Problem 1: Asynchronous Programming and API Integration
Description: create a program that fetches and displays data from a public API asynchronously.
Task:
1.Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap, etc.).
2.Use JavaScript’s Fetch API to asynchronously fetch data from the chosen API.
3.Display relevant information from the API response on the webpage.
e.g. https://jsonplaceholder.typicode.com/todos/1
Problem 2: Largest Palindrome Product
Objective:Find the largest palindrome made from the product of two 3-digit numbers.
How to do it:
1.Generate Products: Create a nested loop to iterate through all possible pairs of 3-digit numbers,
multiplying them to get products.
for (let i = 100; i < 1000; i++) {
 for (let j = 100; j < 1000; j++) {
 const product = i * j;
 // Check if product is a palindrome
 // Update the largest palindrome found
 }
}
2.Check Palindrome: For each product, check if it is a palindrome. Implement a function to determine
if a number reads the same backward as forward.
3.Track Largest Palindrome: Keep track of the largest palindrome found during the iteration.
Problem 3: Largest Product in a Grid
Objective: In a 20x20 grid, find the greatest product of four adjacent numbers (up, down, left, right, or
diagonally).
for (let row = 0; row < 20; row++) {
 for (let col = 0; col < 20; col++) {
 // Calculate products in all directions and track maximum
 }
}
How to do it:
1.Parse the Grid: Represent the 20x20 grid in your code. This could be done using a 2D array or
another suitable data structure.
2.Calculate Products: For each element in the grid, calculate the product of four adjacent numbers
in all directions: horizontally, vertically, and diagonally.
3.Track Maximum Product: Keep track of the maximum product obtained during the iteration.
Problem 4: Highly Divisible Triangular Number
Objective:Find the first triangular number with over 500 divisors.
How to do it:
1.Generate Triangular Numbers: Implement a function to generate triangular numbers (the sum
of natural numbers up to a certain point). n can be 1000
 function generateTriangularNumber(n) {
 return (n * (n + 1)) / 2;
 }
2.Count Divisors: Create a function to count the divisors of a given number. This might involve
prime factorization and counting combinations.
3.Iterate and Check: Iterate through triangular numbers, calculate the number of divisors for each,
and check if it exceeds 500.
 4.Optimize Divisor Counting: Optimize the divisor counting function for
 efficiency to handle a large number of divisors.
