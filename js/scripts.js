// Business logic

function mrRoboger(number){
  let numbersArray = number.split('');
  let result = ''
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray.includes("3")){
      result = "Won't you be my neighbor?";
    } else if (numbersArray.includes("2")){
      result = "Boop!";
    } else if (numbersArray.includes("1")){
      result = "Beep!";
    } else if (numbersArray[i]){
      result = numbersArray.join(", ") + "..."
    }  
  }
  return result;
} 

// UI logic

let robogerArray = [];

function userInput(event){
  event.preventDefault();
  const robogerInput = document.getElementById("input").value;
  if(!isNaN(robogerInput)){
    const results = mrRoboger(robogerInput);
    robogerArray.push(results);
    } else { 
      robogerArray.push("Error!");
    }
    const output = document.getElementById("output");
    output.innerText = robogerArray.join(' ');
  } 
  window.addEventListener("load", function(){
    document.getElementById("roboger").addEventListener("submit", userInput);
  });
