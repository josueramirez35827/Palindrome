let text = document.getElementById("palindromeCheck");
let word = document.getElementById("userPrompt");
let userWord = prompt('enter a word');

 

  let reverseStr = " "
  for (let i = userWord.length - 1; i >= 0; i--) {
    reverseStr += userWord[i];
  }

  if (userWord === reverseStr) {
    text.innerHTML = `${userWord} is a palindrome`;
  } else {
    text.innerHTML = `${userWord} is not a palindrome`;
  }
