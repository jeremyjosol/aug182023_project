# Mr Roboger's Neighborhood

## Contributors
Jeremy Josol

## About
This application features a webpage that takes a user number input and outputs a phrase from Mr. Roboger if the number contains 1, 2, or 3.

## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript
* VSCode
* Google Fonts

## Application Setup
```
1. Clone the repository via GitHub
2. Open the 'aug182023_project.zip' file
3. Once the file has been zipped, open 'aug182023_project'
4. Open the 'index.html' file to view the project on your local browser
5. Alternatively, the project can be viewed from the Github Pages link
```
## Github Pages
[Mr. Roboger's Neighborhood - Click to View](https://jeremyjosol.github.io/aug182023_project/)

## Known Bugs
No major bugs known. Please kindly report any known issues to the repository's creator.

## Tests

Describe: mrRoboger()
```
Test 1: "If a single digit is entered, it will return that value"
Code: mrRoboger(1);
Expected Output: 1

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

Test 9: "If a double digit number that starts with 2, 4, 5, 6, 7, 8, and 9 ends with the number 2, it will replace that number with "Boop!" but in order to do that, we must refactor the hierachy."
Code: mrRoboger(12);
Expected Output: "Boop!"

Test 10: "If a double digit number that starts with 3, 4, 5, 6, 7, 8, and 9 ends with the number 3, it will replace that number with "Boop!" but in order to do that, we must refactor the hierachy again."
Code: mrRoboger(13);
Expected Output: "Won't you be my neighbor?"

Test 11: "If we isolate index [0] and [1] per branch statement, we need to achieve the same rules going forward if it is a triple, quadruple, etc digit number. Instead of isolating only index [0] and [1], we can replace this logic with the .includes() method."
Code: mrRoboger(103);
Expected Output: "Won't you be my neighbor?"

Test 12: "Final refactor, all tests complete. Add "..." to the end of every input."
Code: mrRoboger(4);
Expected Output: "4..."
```

## License

MIT License

Copyright (c) 2023 Jeremy Josol

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
