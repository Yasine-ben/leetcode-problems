/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    let arr = String(x).split("")
    let rev = String(x).split("").reverse()
    
    console.log(arr,rev)

    arr = arr.join()
    rev = rev.join()
    if(arr == rev) return true
    else return false
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))