
function checkPalindrome(no) {
    const arrayValues = no.split('');
    console.log(arrayValues);
    const reverseArrayValues = arrayValues.reverse();
    const reverseNo = reverseArrayValues.join('');
    if (no == reverseNo) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const no = window.prompt("Enter a number:");
checkPalindrome(no);

