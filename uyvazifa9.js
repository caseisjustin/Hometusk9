// 1chi misol

// function integer(n1){
//     if(n1 < 0){
//         return () => {return "iltimos 0 dan katta son kiriting!"}
//     }
//     function multi(n2){
//         let res = 0
//         for(let i = 1; i <= n1; i++){
//             res += i**n2
//         }
//         return res
//     }
//     return multi
// }

// console.log(integer(-2)(2))







// 2chi masala

// let tubSon = (n) => {
//     function primeSum(m){
//         let sum = 0
//         function primeNumbers(num){
//             for(let i = 2; i < num; i++){
//                 if(num % i === 0){
//                     return false
//                 }
//             }
//             return true
//         }
//         for(n; n < m; n++){
//             if(primeNumbers(n)){
//                 sum += n
//             }
//         }
//         return sum
//     }
//     return primeSum
// }

// console.log(tubSon(1)(10))










// 3chi misol

// function word(str){
//     str = str.toUpperCase()
//     function sorter(str){
//         let temp = str.split("")
//         for(let i = 0; i < str.length; i++){
//             for(let j = i + 1; j < str.length; j++){
//                 if(temp[i] > temp[j] && ((temp[i] <= 'a') || (temp[i] >= 'z') || (temp[i] <= 'A') || (temp[i] >= 'Z'))){
//                     let t = temp[i]
//                     temp[i] = temp[j]
//                     temp[j] = t
//                 }
//             }
//         }
//         temp = temp.join("")
//         return temp
//     }
//     function checker(str2){
//         str2 = str2.toUpperCase()
//         str = sorter(str)
//         str2 = sorter(str2)
//         console.log(str, str2)
//         let check = true
//         high = str.length > str2.length ? str.length : str2.length
//         for(let i = 0; i < high; i++){
//             if(str[i] != str2[i]){
//                 check = false
//             }
//         }
//         if(check){
//             return true
//         }
//         return false
//     }
//     return checker
// }

// console.log(word("apple")("ElpAp"))










// 4chi misol

// function FebonNums(n){
//     if(n < 2){
//         return 1;
//     }
//     else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// let n = 11
// for(let i = 0; i <= n; i++){
//     console.log(fibonacci(i))
// }








// 5chi misol

function closeNumber(arr){
    function check(m){
        
    }
}