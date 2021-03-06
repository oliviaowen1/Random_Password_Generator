# Random Password Generator

## Table of Contents

* [Overview](#Overview)
* [Installation](#Installation)
* [Features](#Features)
* [Improvements](#Improvements)
* [License](#license)


## Overview
For this project my aim was to make a random password generator that asks the user a series of questions to determine the characters they would like included in their password. This includes asking the length of the password required as well as asking which characters they would and would not like to be included. 

## Installation
In order to use this application, you will need to open it in the browser. You will then need to click the "Generate Password" button. You will then be presented with a series of options, starting with how long you would like your password to be, this will then be followed by asking which characters you would like included in the password. After you have selected all of these, you will be provided with a password that has matched your criteria. If you do not select any/enough features you will be asked to start again and you must begin again with the "Generate Password" button.

You can find the application here:  https://oliviaowen1.github.io/Random_Password_Generator/.

## Features
When starting the application, it will begin at the click of the "Generate Password" button. At this point you will be presented with a prompt, asking how many characters you would like your password to be. As you can see below:

![Application page - first prompt](https://raw.githubusercontent.com/oliviaowen1/Random_Password_Generator/main/Assets/(1)Screenshot%20First%20prompt.png)

 This must be within 8 and 128 characters, if not then you will be presented with an error message, as seen below:

![Characters error message](https://raw.githubusercontent.com/oliviaowen1/Random_Password_Generator/main/Assets/(2)Screenshot%20answer%20not%20within%20characters.png)

After this you will be asked a series of questions, in the form of alerts, that will help to determine which character types you want within your password. The alerts work by taking the answer 'OK' and yes and the answer 'Cancel' as no. This then allows us to determine which characters should appear within the password based on the users selections. You can see an example of the first question below:

![alert first question](https://raw.githubusercontent.com/oliviaowen1/Random_Password_Generator/main/Assets/(3)Screenshot%20second%20option.png)

If no characters are chosen, this will alert the user that no characters have been selected, this will then alert them and they will be asked to start the generator again. This can be seen here:

![no characters selected](https://raw.githubusercontent.com/oliviaowen1/Random_Password_Generator/main/Assets/(4)Screenshot%20no%20characters%20selected.png)

When the minimum criteria has been met (an amount of characters within the limits have been selected and at least one character type have been chosen), the generator will provide a code at random to match the criteria selected. The below password is 9 characters, that include lowercase, uppercase, numbers and symbols:

![password provided](https://raw.githubusercontent.com/oliviaowen1/Random_Password_Generator/main/Assets/(5)Screenshot%20password.png)

You can click "Generate Password" at any point to get a new password. 

## Improvements
If i were to complete this task again, or be provided with more time to do so, i would add a while loop that immediately provides the user with the opportunity to select the correct criteria, saving them pressing the button again. However when trying to do this, i found myself repeating lines of code. 

## License
                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.