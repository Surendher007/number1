//a. Print odd numbers in an array

// anonymous function

let oddnum = function(arr){
    let out = arr.filter(function(num){
        return num%2 !==0
    })
    console.log(out)
}
oddnum([1,2,3,4,5,6,7,8,9,10]);

// IIFE function

(function(arr){
    let out = arr.filter(function(num){
        return num%2 !==0
    })
    console.log(out)
})([1,2,3,4,5,6,7,8,9,10])

// b. Convert all the strings to title caps in a string array

// anonymous function


