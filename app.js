

// Chap # 21 
// // Q-1
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// var firstName = prompt("Please enter your first name")
// var lastName = prompt("Please enter your last name")
// var fullName = (firstName + lastName)
// alert("Good Morning" + " " + fullName)
 
// // Q-2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favMobile = prompt("What is your favourite mobile phone model")

// var response  = favMobile.length
// document.write("My favorite phone is:" + " " +favMobile+ " " + "Length of String:"+ " "+ response)


// 3.
//  Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "Pakistani"
// document.write(country.indexOf("n"))


// 4.
//  Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var String = "hello world"
// document.write("String: Hello World" + "<br>" + "index of 'l':" + " "+ String.lastIndexOf("l"))

// 5.
//  Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var char = "Pakistani"
// document.write("String: Pakistani" + "<br>" + "Character at index 3:" + " "+char.charAt(3))

// 6.
//  Repeat Q1 using string concat() method.
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var firstName = prompt("Please enter your first name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName.concat(" " + lastName); 
// document.write(fullName)


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var city = "Hyderabad";
// var city1 = city.replace("Hyder", "Islam");
// document.write(city + "<br>" + "after replacement:" + " " + city1)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g, '&');
// document.write(message1)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var integerString = "472"
// var num = Number(integerString);
// document.write("Value:" + " " + integerString+ "<br>")
// document.write("type:" + " " + "String"+ "<br>")
// document.write("Value:" + " " + num+ "<br>")
// document.write("type:" + " " + "number"+ "<br>")


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var dryfruit = prompt("Please write any dryfruit name?")
// var changecase  = dryfruit.toUpperCase();
// document.write(changecase)    

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var language = prompt("please enter the language name you studying?")
// var firstchar = language.slice(0,1);
// var otherchar = language.slice(1);
// firstchar = firstchar.toUpperCase();
// otherchar = otherchar.toLowerCase();
// var language = firstchar+otherchar
// document.write(language)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser

// var  num = 35.36;
// var num1 = 35;
// var num2 = 36;
// // var numasstring = num.toString();
// var numasstring1 = num1.toString();
// var numasstring2 = num2.toString();
// document.write("Number:" + num+"<br>" + "Result:" + " " +num1+num2)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var username = prompt("Please input your name: ");
// for(var i = 0; i<=username.length; i++){
//     if(username[i] === "!" || username[i] == "," || username[i] == "." || username[i] == "@"){
//        prompt("Please enter a valid username");
//     }

// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?")
// var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for (var i=0; i<bakery.length; i++){
//     if(bakery[i] === order){
//         alert(order +" "+ "is available at index"+ " "+i + " "+ "our bakery")
//     }
//     else{
//         alert('We are sorry.'+ " " + order + " " +  ' is not available in our bakery')
//     }
// }



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var userPassword = prompt("Please enter password here ");
// var userPasswordLength = userPassword.length;
// document.write("<h2>Task # 15</h2>")
// document.write("Entered password: " + userPassword)
// for(var i = 0; i<=userPassword.length; i++){
//     if (userPassword[i] == 1||2||3||4||5||6||7||8||9){
//         document.write("<br>Password can not begin with a number: ")
//     }
//     break
// }
// if (userPasswordLength == 6){

// }
// else{
//     var passwordalert = document.write("<br>Please enter a valid pasword"); 
// }





// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";

// for(var i = 0; i<=university.length; i++){
//     var university2 = university[i].split(" ");
//     document.write(university2+"<br>");
// }





// 17. Write a program to display the last character of a user
// input.

// var country = prompt("please enter country name")
// document.write(country.charAt(country.length -1))

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string


// var textString = "The quick brown fox jumps over the lazy dog";
// var stringsplit = textString.toLowerCase().split(" ");
// var count = 0;

// var a = stringsplit[0];

// for (var i = 0; i < stringsplit.length; i++) {
//     if (stringsplit[i] === "the") {
//         count++;
//     }

// }
// document.write("<h2>Task # 18</h2>")
// document.write("Text: " + textString + "<br>There are "+ count + " occurence(s) of the word 'the' ")
// // console.log(count)



// chap 26-30
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// a and b

// var num = 3.45214
// var round = Math.round(num)
// document.write("number:"+ " "+num + "<br>")
// document.write("round of value:"+ " "+round + "<br>")

// // c
// var floor = Math.floor(num)
// document.write("floor value:"+ " "+floor+ "<br>")

// // d
// var ceil = Math.ceil(num)
// document.write("ceil value:"+ " "+ceil)

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// a and b

// var num = -2.673
// var round = Math.round(num)
// document.write("number:"+ " "+num + "<br>")
// document.write("round of value:"+ " "+round + "<br>")

// // // c
// var floor = Math.floor(num)
// document.write("floor value:"+ " "+floor+ "<br>")

// // // d
// var ceil = Math.ceil(num)
// document.write("ceil value:"+ " "+ceil)


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// function absValue(number){
//     if (number < 0 ){
//         return -number
//     }
//     else {
//         return number
//     }
// }

// document.write(absValue(5))

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.


// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var improvedNum1 = (bigDecimal * 9) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var numberOfStars1 = Math.floor(improvedNum1);
// document.write("random dice value is" + " " +numberOfStars+ "<br>")
// document.write("random dice value is" + " " +numberOfStars1)


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var heads = prompt("enter heads username");
// var tails = prompt("enter tails username");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 2) {
//     alert("random coin value: " + heads )
// }
// else {
//     alert("random coin value: " + tails )
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var num = Math.random()*100;
// var fixed = num.toFixed(0)
// document.write(num)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// a
// var a = 50
// var return = parseInt("a")
// document.write(return)

// b
// var a = prompt("enter your weight in kilograms");
// document.write(parseInt("The weight of user is" + " " + "a" )+"<br>");


// document.write(parseInt("50")+"<br>");
// document.write(parseInt("50.2")+"<br>");
// document.write(parseInt("50.2")+"<br>");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretnum = 5
// var userinput = prompt("please enter the secret Number")
// for (if i === secretnum){
//     alert(congratulation you are winner)
// }
// else {
//     alert(sorry, you didnt choose a right answer)
// }

// chap 31-34

// 1. Write a program that displays current date and time in
// your browser.

// var a = new Date();
// document.write(a)

// 2. Write a program that alerts the current month in words.
// For example December.

// var a = new Date();
// // document.write(a)

// var b = a.toString();
// // document.write(b)

// var c = b.slice(4,7)
// document.write("Current Month:" + " " +c)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(" Today is:" + " " +nameOfToday)

// or

// var a = new Date();
// // document.write(a)

// var b = a.toString();
// // document.write(b)

// var c = b.slice(0,3)
// document.write("Today is:" + " " +c)

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     for (var i = 0; i<=0; i++){
//         if (dayNames[i] == "Sunday" || "Saturday"){
//             document.write("It's Fun Day")
//         }
//     else{
//         document.write("<br>It's not Fun Day"); 
//     }
// }

// 5. Write a program that shows the message “First fifteen days of the month”
// if the date is less than 16th of the month else shows “Last days of the month”. 


// var now = new Date();
//     for (var i = 0; i<=0; i++){
//         if (now[i] == 15){
//             document.write("First fifteen days of the month")
//         }
//     else{
//         document.write("Last days of the month"); 
//     }
// }

// 6. Write a program that determines the minutes since midnight,
//  Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like to represent the Date object.   

// var d = new Date(); 
// var currentMonth = d.getMonth(); 
// var dayOfMonth = d.getDate();
// var currYr = d.getFullYear(); 
// var currentHrs = d.getHours(); 
// var currMins = d.getMinutes(); 
// var currSecs = d.getSeconds() 
// var currMills = d.getMilliseconds();
// var millsSince = d.getTime(); 
// var minuteSince = ((millsSince/1000)*60*60);

// document.write("Current Date:" + " " + d + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970:" + " " + millsSince   + "<br>")
// document.write("Elapsed minutes since January 1, 1970:" + " " + minuteSince   + "<br>")

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// var d = new Date(); 

// var currentHrs = d.getHours(); 

//     for (var i = 0; i<=0; i++){
//         if (currentHrs[i] == 1 ||2||3||4||5||6||7||8||9||10||11||12){
//             document.write("its AM")
//         }
//     else{
//         document.write("its PM"); 
//     }
// }

// 8. Write a program that creates a Date object for the last day
//  of the last month of 2020 and assigns it to variable named laterDate. 

// var d = new Date("dec 31, 2020");

// document.write(d)

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
//  Note: 1st Ramadan was on June 18, 2015 

// var d = new Date("Jun 18, 2015");
// var dmili = d.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dmili;
// var ramzan = Math.floor(diff/(1000*60*60*24))

// alert(ramzan + " " + "days have passed since 1st Ramzan, 2015")

// 10. Write a program that displays in your browser
// the seconds that elapsed between the reference 
// date and the beginning of 2015. 

// var d = new Date("Dec 05, 2015");
// var dmili = d.getTime();

// document.write("on reference date" + " " +  d + "," +"<br>"+  dmili + " " + "seconds had passed since beginning of 2015")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
//  finally display the date object in your browser

// var d = new Date();
// var ago = d.subtract(1, "hours");
// // var today = new Date();
// // var todaymili = today.getTime();
// // var diff = todaymili - dmili;
// // var ramzan = Math.floor(diff/(1000*60*60*24))

// document.write("current date:" + " " + d + " "+ "1 hour ago, it was" + " " + ago )

var d = new Date();
d.setFullYear(2001); 

// 12. Write a program that creates a date object and show the date
//  in an alert box that is reset to 100 years back? 

// var Currentdate = new Date();
// var CurrentYear = Currentdate.getFullYear();

// var olddate = new Date("1921");;

// console.log(Currentdate)
// console.log(olddate)

// document.write("current date:" + " " + Currentdate + " "+ "100 years ago, it was" + " " + olddate )



// 13. Write a program to ask the user about his age. 
// Calculate and show his birth year in your browser. 



// var dob = new Date(prompt("Enter your date of birth", "Dec 26, 2020"))
// var b = dob.toString();
// var years =     b.slice(11,15)

// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is:" + " " +accuage + "<br>" + "Your birth year is:" +years);


// 14. Write a program to generate your K-Electric bill in your browser. 
// All the amounts should be rounded off to 2 decimal places.
// Display the following fields:
//  a. Customer Name 
//  b. Current Month 
//  c. Number of units 
//  d. Charges per unit 
//  e. Net Amount Payable (within Due Date) 
//  f. Late Payment Surcharge 
//  g. Gross Amount Payable (after Due Date) Where,  

// var customerName    = prompt("Please write the customer name")
// var CurrentMonth = prompt("Enter Current Month ");
// var NumberOfUnits = prompt("Enter Number of units");
// var chargesPerUnits = prompt("Enter Charges per units");

// var latePayment = 350; 

// var netpayable = ((NumberOfUnits)*chargesPerUnits);
// var grosspayable = (netpayable+latePayment);


// document.write("<h1>Task # 12</h1><h1>K-Electric Bill</h1>" + 
// "<br>" + "Customer Name:" + " " + customerName + " " +
//  "<br>" + "Month:" +" "+ CurrentMonth + " " +
//  "<br>" + "Number of units:" + " "+ NumberOfUnits+ 
//  "<br>" + "Charges per units:"+ " "+ chargesPerUnits);
// document.write("<br><br>Net Amount Payable (within Due Date):
//  "+netpayable+ "<br>Late Payment Surcharge:
//   "+ latePayment +"<br>Net Amount Payable (within Due Date):
//    "+ grosspayable);



// ===========================================================================

// ===========================================================================



// chap # 35-38

// 1. Write a function that displays current date & time in your browser. 

// function date(){
//     alert(new Date)
// }
// date();

// 2. Write a function that takes first & last name and then it greets the user using his full name. 


// function FullUserName(){

//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     var fullName = firstName+" "+lastName;
//     return fullName;

// }

// var userName = FullUserName();
// alert("Hello!" + " " +userName +" "+ "Welcome to my Javascript program");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers


// function add(){
// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
//     alert (a+b)
// }
// add();


// 4. Calculator:  Write a function that takes three arguments 
// num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser.   

// function Calc(num1, opr, num2){
//     if (opr === "+"){
//         return num1+num2
//     }

//     else if (opr === "-"){
//         return num1-num2
//     }
//     else if(opr === "*"){
//         return num1*num2
//     }
//     else {
//         return "incorrect oprerator"
//     }
// }

// var result = Calc(5, "+", 7);
// var result1 = Calc(5, "-", 7);
// var result2 = Calc(5, "*", 7);
// var result3 = Calc(5, "$", 7);

// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)

// 5. Write a function that squares its argument. 

// function squareNumber(number) {
//         return number * number;
//     }
   
//     var input = squareNumber(6);
    
//     document.write("<h1>Task # 5</h1>")
//     document.write("Square of number is: " + input);

// 6. Write a function that computes factorial of a number. 

// function factorial(n) {
//         var number = 1;
//         for (var i = n; i >= 1; i--) {
//             number = number * i;
//         }
//         return number;
//     }
    
//     var factorialAnswer = factorial(+prompt("Enter the number this function will return you the factorial number of your number: "));
//     alert("This is factorial your answer " + factorialAnswer);
    

// 7. Write a function that take start and end number as inputs & display counting in your browser. 

// function counting(a, z) {

//     var firstNumber = +prompt("Enter first number: ");
//     var lastNumber = +prompt("Enter last number: ");
//     document.write("<h1>Task # 6</h1>")
//     for (var i = firstNumber; i < lastNumber; i++){
//         document.write(i+"<br>");
//     }

//     return i;
// }

// var countingDisplay = counting();
// document.write(countingDisplay);


// 8. Write a nested function that computes hypotenuse of a right angle triangle.
//   Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs.
//  Outer function : calculateHypotenuse()
//  Inner function: calculateSquare() 

// var b = prompt("Enter base value: ");
// var p = prompt("Enter Perpendicular value: ");
// outerfunc(b, p)
// function outerfunc(b, p) {


//     function innerfunc() {

//         var b = base ** 2;
//         var p = Perpendicular ** 2;
//             alert("hypotenus")

//     }

// }
// var hypotenus = b + p;

// console.log(outerfunc(b, p))



// 9. Write a function that calculates the area of a rectangle. 
//   A = width * height     Pass width and height in following manner:
//   i. Arguments as value 
// ii. Arguments as variables  

        // var height = prompt("Enter a whole number for the height of your rectangle.");
        // var width = prompt("Enter a whole number for the width of your rectangle.");
        // var value = height*width

        // var height = prompt("Enter a whole number for the height of your rectangle.");
        // var width = prompt("Enter a whole number for the width of your rectangle.");
        // var value = height*width

        // function area() {
        //                 return  value
        // }
      
        // document.writeln('The area of your rectangle is ' + value);         


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.  

// function palindrome() {
//     var text = prompt("Enter any word or string: ");
//     var reverse = text.split("").reverse().join("");

//     if (reverse === text) {
//         alert(text + " This is palindrome");
//     }
//     else {
//         alert(text + " This is not palindrome")
//     }

// }

// palindrome();


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//   EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 


// function letterCapital(str) {
//     var c = [];
//     var sep = str.split(" ");
    
//     for (var i=0; i < sep.length; i++){
//         c.push(sep[i][0].toUpperCase()+sep[i].slice(1));
//     }
//     return c.join(" ");
// }
// console.log(letterCapital("the quick brown fox"))


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//   EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

// function longestWord(str) {
//     var words = str.split(" ");
//     var size  = 0;
//     var max   = [""];

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length >= size) {
//             size = words[i].length;
//             if (max[max.length - 1].length <words[i].length){
//                 max = [];
//                 max.push(words[i]);
//             }
//             else{
//                 max = [...max,words[i]];
//             }
//         }
//     }
// return [...max];
// }

// console.log(longestWord("Web Development Tutorial"));


// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'   

// function occurence() {
// var text = "JSResources.com"
// count = 0;

// for (var i = 0; i <text.length; i++){
//     if(text.charAt(i) === "o" ) {
//         count++;
//     }
// }
// }
// console.log(occurence());

// function occurrencesCounter(str, letter) {
//     var stringAskingFromUser = prompt("Enter String here ");
//     var letterAskingFromUser = prompt("Enter any letter ");
//     var letterCount = 0;

//     for(var i = 0; i<stringAskingFromUser.length; i++){
//         if(stringAskingFromUser.charAt(i) == letterAskingFromUser){
//             letterCount++;
//         }
//     }

//     document.write("sample arguments:"+ stringAskingFromUser);
//     return letterAskingFromUser;
// }

// var occurenceFunctnCalled = occurrencesCounter();

// document.write("<br>Occurence letter:" + occurenceFunctnCalled)
// console.log(occurrencesCounter("stringAskingFromUser", "letterAskingFromUser"));
// document.write(occurrencesCounter("stringAskingFromUser", "letterAskingFromUser"));

// 14. The Geometrizer Create 2 functions that calculate properties of a circle,
// using the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN". 
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".  
// Circumference of circle    =     2πr Area of circle       =     πr2   

