/* 
Q4. Write a program in JS to check whether a number is prime or not?
*/

function isPrime(n) {
    if (n < 2 ) return false;

    for (let i = 2; i*i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Function will return true if its a prime else false;