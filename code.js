function removeChar(str){
     let output = ''
     let string = str.split('')
     output += string.pop()
     output += string.shift()
     return string.join('')
   };

let input = prompt("Remove the first and last character and see the results. Type anything here!")
let result = document.querySelector("result")
document.write(removeChar(input))