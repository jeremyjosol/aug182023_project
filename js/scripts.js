// Business logic

function mrRoboger(number){
  let numbersArray = number.split('');
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[0] === "3" || (numbersArray[1] === "3")){
      return "Won't you be my neighbor?";
    } else if (numbersArray[0] === "2" || numbersArray[1] === "2"){
      return "Boop!";
    } else if (numbersArray[0] === "3"){
      return "Won't you be my neighbor?";
    } else if (numbersArray[0] === "0" || numbersArray[0] >= 4 || numbersArray[0] <= 9)
      return numbersArray[0];
  }}