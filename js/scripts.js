// Business logic

function mrRoboger(number){
  let numbersArray = [];
  for (let i = 0; i <= parseInt(number); i++){
    numbersArray.push(i);
  }

  let result = [];

  for (let i = 0; i < numbersArray.length; i++) {
    let robogerNumber = numbersArray[i].toString();
    if (robogerNumber.includes("3")){
      result.push("Won't you be my neighbor?");
    } else if (robogerNumber.includes("2")){
      result.push("Boop!");
    } else if (robogerNumber.includes("1")){
      result.push("Beep!");
    } else {
      result.push(robogerNumber);
    }  
  }
  return result.join(", ")
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
