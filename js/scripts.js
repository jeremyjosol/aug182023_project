// Business logic

function mrRoboger(number){
  let numbersArray = number.split('');
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray.includes("3")){
      return "Won't you be my neighbor?";
    } else if (numbersArray.includes("2")){
      return "Boop!";
    } else if (numbersArray.includes("1")){
      return "Beep!";
    } else 
      return numbersArray.join('');
  }
} 

// UI logic

function userInput(event){
  event.preventDefault();
  const robogerInput = document.getElementById("input").value;
  const results = mrRoboger(robogerInput);
  const output = document.getElementById("output");
  output.innerText = results;
}
  window.addEventListener("load", function(){
    document.getElementById("roboger").addEventListener("submit", userInput);
  });
