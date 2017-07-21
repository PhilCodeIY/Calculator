
// Get all the keys from document
let keys = document.querySelectorAll("button")

// use a for loop to eliminate c & = from the string
//then you can else every number without checking it
// Add onclick event to all the keys and perform operations
for (i=0; i < keys.length; i++){
   keys[i].onclick = function(e){
  // Get the input and button values
  //input is now the results
  let input = document.querySelector('#results')
  //create inputVal to contain everything passed into the screen
  let inputVal = input.innerHTML
  let btnVal = this.innerHTML
  //btnVal is every value passed in except C, =
      //this sets the string to clear
  if(btnVal == "C"){
    input.innerHTML= ""
  }
else if (btnVal == "="){
  let equation = inputVal
      if (equation)
        input.innerHTML= eval(equation)
//this will input each number
  }else{
    input.innerHTML += btnVal
  }




//   let total = document.getElementById('results'){
//     total.innerHTML = ""
// }
// If eval key is pressed, calculate and display the result

//lastChar is the solution
// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it

}
}
