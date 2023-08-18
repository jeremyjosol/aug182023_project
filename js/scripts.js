// Business logic

function mrRoboger(number){
  let numbersArray = number.split('');
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[0] === "2" || (numbersArray[1] === "2")){
      return "Boop!";
    } else if (numbersArray[0] === "1" || numbersArray[1] === "1"){
      return "Beep!";
    } else if (numbersArray[0] === "3"){
      return "Won't you be my neighbor?";
    } else if (numbersArray[0] === "0" || numbersArray[0] >= 4 < 9)
      return numbersArray[0];
  }}