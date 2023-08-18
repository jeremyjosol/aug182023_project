Describe: mrRoboger()


Test 1: "If a single digit is entered, it will return that value"
Code: mrRoboger(1);
Expected Output: 1

## Passing

Test 2: "If the number 1 is entered, it will replace that number with 'Beep!'."
Code: mrRoboger(1);
Expected Output: "Beep!"

Test 3: "If a number is entered, it will be placed into an empty array."
Code: mrRoboger(1);
Expected Output: [1]

Test 4: "If a number that starts with 1 contains an index of [0], it will replace that number with 'Beep!'."
Code: mrRoboger(11);
Expected Output: "Beep!"

Test 5: "If a number that starts with 2 contains an index of [0], it will replace that number with 'Boop!'."
Code: mrRoboger(2);
Expected Output: "Boop!"

Test 6: "If a number that starts with 3 contains an index of [0], it will replace that number with "Won't you be my neighbor?".
Code: mrRoboger(3);
Expected Output: "Won't you be my neighbor?"

Test 7: "If a single digit number including 0 that isn't 1, 2, 3 is entered, it will output the number entered.
Code: mrRoboger(0);
Expected Output: 0

Test 8: "If a double digit number that starts with 1, 4, 5, 6, 7, 8, and 9 ends with the number 1, it will replace that number with "Beep!".
Code: mrRoboger(41);
Expected Output: "Beep!"

Test 9: "If a double digit number that starts with 2, 4, 5, 6, 7, 8, and 9 ends with the number 2, it will replace that number with "Boop!".
Code: mrRoboger(42);
Expected Output: "Boop!"