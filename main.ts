//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//                  START...............

// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some python today?`);

//                  END.............

//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//                  START...............

// let per_name: string = "Bilalkhan";
// console.log(per_name.toUpperCase());

// 4.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//                  START...............

// console.log(
//   "A Person who never made a mistake never tried anuthing new.'albert einstein'"
// );

//                  END.............

// 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//                  START...............

// let p_name: string = "Albert Einstein";
// let message: string = "e kaagzi phool jese chehre mazak urate h aadmi ka";
// console.log(`${p_name} Once said, ${message}`);

//                  END.............

// 6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//                  START...............

// // use \t space.
// let pers_name: string = "\tabdullah\t";
// console.log(pers_name);
// // 6.stripping names
// // use \n new line.
// let pe_name: string = "\nAlizaffar\n";
// console.log(pe_name);

//                  END.............

// 7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//                  START...............

// let addition: number = 5 + 3;
// let subtraction: number = 10 - 2;
// let multipilication: number = 4 * 2;
// let division: number = 16 / 2;
// console.log(addition, subtraction, multipilication, division);

//                  END.............

// 8.You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

//                  START...............

// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(80 / 10);

// 9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

//                  START...............

// let myfav_num: number = 20;
// console.log(`My favorite number is ${myfav_num} `);

//                    END................

//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//                  START...............

//1 PROGRAM.....
//My name is Faiz ali
//Today 19 March 2024
// //I write A to Z
// console.log("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ");

// //2 PROGRAM.....
// //My name is Faiz ali
// //Today 19 March 2024
// //I write 1 to 10
// console.log("1 2 3 4 5 6 7 8 9 10");

//                    END................

//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//                  START...............

// //for loop method;
// let Friends: string[] = ["Bilal", "Ammad", "Basit", "Jawad", "Ali"];
// for (let i = 0; i < Friends.length; i++) {
//   console.log(Friends[i]);
// }

// //Simple Method;
// let Friend_list: string[] = ["Bilal", "Ammad", "Basit", "Jawad", "Ali"];
// console.log(Friend_list[0]);
// console.log(Friend_list[1]);
// console.log(Friend_list[2]);
// console.log(Friend_list[3]);
// console.log(Friend_list[4]);

//                    END................

//12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//                  START...............

// //1.for loop method ;
// let friend_list: string[] = ["Bilal", "Ammad", "basit", "jawad", "Ali"];
// for (let i = 0; i < friend_list.length; i++) {
//   console.log(`Hello ${friend_list[i]},how are you?`);
// }

// //2. for map method;
// friend_list.map((items) => console.log(`Hello ${items},how are you?`));

// //3. by simple method
// console.log(`${friend_list[0]},how about you?`);
// console.log(`${friend_list[1]},how about you?`);
// console.log(`${friend_list[2]},how about you?`);
// console.log(`${friend_list[3]},how about you?`);
// console.log(`${friend_list[4]},how about you?`);

//                    END................

//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//              START.........

// let transportation: string[] = ["BMW", "Ferari", "Civic", "Audie", "Corolla"];
// for (let i = 0; i < transportation.length; i++) {
//   console.log(`I would like to own a ${transportation[i]}`);
// }

//               END...........

//14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//              START..........

// let Guest_list: string[] = ["Ali", "Bilal", "Basit"];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     `Dear ${Guest_list[i]},\nYou are inviting at dinner tomorrow.\nThank You.`
//   );
// }

//                END...........

// //15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//              START...........

// let Guest_list2: string[] = ["Ali", "Bilal", "Basit"];
// for (let i = 0; i < Guest_list2.length; i++) {
//   console.log(
//     `Dear ${Guest_list2[i]},\nYou are inviting at dinner tomorrow.\nThank You.\n`
//   );
// }
// let absent_guest: string = "Bilal";
// let new_guset: string = "Hasnain";
// Guest_list2[1];

// console.log(`Mr ${absent_guest} is not coming to the party.`);

//              END............

//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//              START..........

// let Guest_list3: string[] = ["Ali", "Bilal", "Basit"];

// console.log("\nGood News,We have arrange the bigger dinner table.\n");

// Guest_list3.unshift("Jawad");
// Guest_list3.splice(2, 0, "Shazaib");
// Guest_list3.push("Ahsan");

// for (let i = 0; i < Guest_list3.length; i++) {
//   console.log(
//     `Dear ${Guest_list3[i]},\nYou are inviting at dinner tomorrow.\nThank You.\n`
//   );
// }

//              END............

//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//              START.............

// let Guest_list3: string[] = ["Ali", "Bilal", "Basit"];

// console.log("\nGood News,We have arrange the bigger dinner table.");

// Guest_list3.unshift("Jawad");
// Guest_list3.splice(2, 0, "Shazaib");
// Guest_list3.push("Ahsan");

// for (let i = 0; i < Guest_list3.length; i++) {
//   console.log(
//     `Dear ${Guest_list3[i]},\nYou are inviting at dinner tomorrow.\nThank You.\n`
//   );
// }
// console.log(
//   "Sorry dears,we are not arrange big dinner table, Only two guest coming at dinner tomorrow."
// );

// while (Guest_list3.length > 2) {
//   let Remove_guest = Guest_list3.pop();
//   console.log(`Sorry ${Remove_guest},\nYou dont coming at dinner.\n`);
// }

// for (let i = 0; i < Guest_list3.length; i++) {
//   console.log(`Dear ${Guest_list3[i]},\nYou are still invited at dinner.\n`);
// }

// Guest_list3.splice(0,2)
// console.log(Guest_list3)

//              END................

//18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

//              START....................

// let locations:string[]=["Islamabad","Quetta","Kashmir","Lahore","Balochistan"]

// // • Print your array in its original order.
// console.log('\noriginal '+ locations)

// // • Print your array in alphabetical order without modifying the actual list.
// console.log('\ncopy '+ [...locations].sort())

// // • Show that your array is still in its original order by printing it.
// console.log('\noriginal '+ locations)

// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('\ncopy '+ [...locations].sort().reverse())

// // • Show that your array is still in its original order by printing it again.
// console.log('\noriginal '+ locations)

// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log('\noriginal '+ locations.reverse())

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log('\noriginal '+ locations.reverse())

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log('\noriginal '+ [locations].sort())

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log('\noriginal '+ [locations].sort().reverse())

//                 END.....................

//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//                  START...........

// let Guest_list3: string[] = ["Ali", "Bilal", "Basit"];

// for (let i = 0; i < Guest_list3.length; i++) {
//     console.log(`Dear ${Guest_list3[i]},\nYou are still invited at dinner.\n`);
//   }

//   Guest_list3.splice(0,3)
//   console.log(Guest_list3)

// console.log(`Total number of guest are ${Guest_list3.length}`)

//                  END.............

//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//              START...................

// let Mountain_list: (string | number)[] = [
//   "K2",
//   "Karakoram",
//   "Mount Everest",
//   "Nanga Parbat",
//   "Broad Peak",
//   "Hindu Kush",
//   "Salt Range",
//   "Tirich Mir",
//   "Kirthar",
//   "Safed Kah",
//   "Himalayah",
//   "RakaPoshi",
// ];

// for (let i = 0; i < Mountain_list.length; i++) {
//   console.log(Mountain_list[i]);
// }

//              END...................

//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//              START.........

// interface person_object {
//   name: string;
//   lname: string;
//   nationality: string;
//   age: number;
//   education: string;
//   student: boolean;
// }

// let person_object: person_object = {
//   name: "faiz",
//   lname: "Ali",
//   nationality: "Pakistani",
//   age: 19,
//   education: "intermediate",
//   student: true,
// };

// console.log(person_object);

//              END................

//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//              START.......

// let newArray:string[]=["Imran Khan","Saddam Hussain","kadafi"]

// //accessing array by index.
// console.log(newArray[4])

// //correct the error.
// console.log(newArray)

//              END...........

//23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//              START..............

// let car: string = "subaru";

// //      TRUE.........
// //1
// console.log("Is car =='subaru'? I predict True.");
// console.log(car == "subaru");

// //2
// console.log("Is car ==='subaru'? I predict True.");
// console.log(car === "subaru");

// //3
// console.log("Is car !='honda'? I predict True.");
// console.log(car != "honda");

// //4
// console.log("Is car.toupperCase() ==='SUBARU'? I predict True.");
// console.log(car.toUpperCase() === "SUBARU");

// //5
// console.log("Is car !=='ford'? I predict True.");
// console.log(car !== "ford");

// //      FALSE....
// //1
// console.log("Is car =='Subaru'? I predict False.");
// console.log(car == "Subaru");

// //2
// console.log("Is car =='honda'? I predict False.");
// console.log(car == "honda");

// //3
// console.log("Is car !='subaru'? I predict False.");
// console.log(car != "subaru");

// //4
// console.log("Is car ==='Train'? I predict False.");
// console.log(car === "Train");

// //5
// console.log("Is car =='SUBARU'? I predict False.");
// console.log(car == "SUBARU");

//              END.............

//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//                  START..........

// • Tests for equality and inequality with strings
// console.log("equality as a string", "apple" === "apple"); //true
// console.log("inequality as a string", ("apple" as string) === "orange"); //false
// console.log("inequality as a string", ("apple" as string) != "orange"); //true

// // • Tests using the lower case function
// console.log("lower function case", "Hello".toLowerCase() === "hello"); //true
// console.log("lower function case", "Hello".toLowerCase() === "HELLO"); //false

// // • Numerical tests involving equality and inequality,
// console.log("numerical test equality", 25 === 25); //true
// console.log("numerical test inequality", (25 as number) == 26); //false
// console.log("numerical test inequality", (25 as number) != 26); //true

// // • greater than and less than,
// console.log("numerical test greater than", 25 > 24); //true
// console.log("numerical test less than", 23 < 25); //true

// // • greater than or equal to, and less than or equal to
// console.log("numerical test greater than or equal to", 25 >= 25); //true
// console.log("numerical test less than or equal to", 21 <= 24); //true

// // • Tests using "and" and "or" operators
// console.log('testing And &&',5===5 && 10>5)//true
// console.log('testing And OR ||',5===5 || 10>5)//true
// console.log('testing And OR ||',5===5 || false)//true

// // • Test whether an item is in a array
// let fruits:string[]=["apple","banana","mango","orange"]
// console.log("test'apple in ithe array:'",fruits.includes("apple"))//true

// // • Test whether an item is not in a array
// console.log("test'apple in ithe array:'",fruits.includes("graphs"))//false

//                  END..............

//25.Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//                  START................

// let alien_color: string = "green";
// if (alien_color === "green") {
//   console.log("Player just earn 5 points.");
// } else {
//   console.log("no points earned.");
// }

// // • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alien_color0: string = "yellow";
// if (alien_color0 === "green") {
//   console.log("Player just earn 5 points.");
// } else {
//   console.log("[]");
// }

//                  END...........

//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// let alien_color2: string = "green";
// if (alien_color2 === "green") {
//   console.log("Player just earn 5 points.");
// } else {
//   console.log("Player just earned 10 points.");
// }

// // • Write one version of this program that runs the if block and another that runs the else block.
// let alien_color0: string = "red";
// if (alien_color0 === "green") {
//   console.log("Player just earn 5 points.");
// } else {
//   console.log("Player just earned 10 points.");
// }
//              END..................

//27.   Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//              START................
// let alien_color3: string = "green";
// if (alien_color3 === "green") {
//   console.log("Player just earn 5 points.");
// } else if (alien_color3 === "yellow") {
//   console.log("Player just earn 10 points.");
// } else if (alien_color3 === "red") {
//   console.log("Player just earn 15 points.");
// }

// //alien color is yellow.
// alien_color3 = "yellow";
// if (alien_color3 === "green") {
//   console.log("Player just earn 5 points.");
// } else if (alien_color3 === "yellow") {
//   console.log("Player just earn 10 points.");
// } else if (alien_color3 === "red") {
//   console.log("Player just earn 15 points.");
// }

// //alien color is yellow.
// alien_color3 = "red";
// if (alien_color3 === "green") {
//   console.log("Player just earn 5 points.");
// } else if (alien_color3 === "yellow") {
//   console.log("Player just earn 10 points.");
// } else if (alien_color3 === "red") {
//   console.log("Player just earn 15 points.");
// }

//              END...............

// //28.Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// let age:number=19;

// // • If the person is less than 2 years old, print a message that the person is a baby.
// if(age<2){
//     console.log("the person is a baby.")
// }

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// else if(age >= 2 && age<4){
//     console.log("the person is a toddler.")
// }

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if(age >= 4 && age< 13){
//     console.log("the person is a kid.")
// }

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if(age >= 13 && age<20){
//     console.log("the person is a teenager.")
// }

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if(age >= 20 && age<65){
//     console.log("the person is a adult.")
// }

// // • If the person is age 65 or older, print a message that the person is an elder
// else if(age >= 65){
//     console.log("the person is a elder.")
// }

//                  END...............

//29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let fav_fruits: string[] = ["Apple", "Banana", "Mango"];
// if (fav_fruits[0] === "Apple") {
//   console.log(`I really like ${fav_fruits[0]}`);
// }
// if (fav_fruits[1] === "Banana") {
//   console.log(`I really like ${fav_fruits[1]}`);
// }
// if (fav_fruits[2] === "Mango") {
//   console.log(`I really like ${fav_fruits[2]}`);
// }

// if (fav_fruits[3] === "Orange") {
//   console.log(`I really like ${fav_fruits[3]}`);
// } else {
//   console.log([]);
// }

// if (fav_fruits[4] === "Lichi") {
//   console.log(`I really like ${fav_fruits[4]}`);
// } else {
//   console.log([]);
// }
//                  END..................

//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//                  START..............
// let Username: string[] = ["Ali", "Bilal", "Admin", "Basit", "jawad"];

// //using ForEach loop on Array.
// Username.forEach((OneUser) => {
//   if (OneUser === "Admin") {
//     console.log(`\nHello ${OneUser}, would you like to see a status report?`);
//   } else {
//     console.log(`\nHello ${OneUser}, thank you for logging in again.`);
//   }
// });

//                  END.................

// //31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//                  START..........

// let Username2: string[] = ["Ali", "Bilal", "Admin", "Basit", "jawad"];

// if ((Username2 = [])) {
//   console.log("We need to find some users!");
// }

// Username2.splice(0, 4);
// console.log(Username2);

//                  END..............

//                START.................
// //33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

// let number_array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of number_array) {
//   let OrdinalEnding: string;

//   if (num === 1) {
//     OrdinalEnding = "st";
//   } else if (num === 2) {
//     OrdinalEnding = "nd";
//   } else if (num === 3) {
//     OrdinalEnding = "rd";
//   } else {
//     OrdinalEnding = "th";
//   }

//   console.log(`${num}${OrdinalEnding}`);
// }

//                END.....................

//34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//                START...................
// let fav_pizza: string[] = [
//   "chicken pizza",
//   "pepperoni pizza",
//   "chicken fajita",
// ];

// for (let pizzas of fav_pizza) {
//   console.log(`I like ${pizzas} pizza.`);
// }
// console.log(`I really love pizza!`);

//                  END.................

//35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//                  START.............

// let Animals: string[] = ["Cow", "Dog", "Cat"];

// for (let animal of Animals) {
//   console.log(`A ${animal} would make a great pet.`);
// }
// console.log(`these animals would make a great pet!`);

//                  END.................

//36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

//                  START..................
// function make_shirt(size: string, text: string) {
//   console.log(`Creating a ${size} shirt with the message: ${text} `);
// }

// make_shirt("large", "Nike");

//                   END.....................

//37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//                  START...........

// function make_shirt(
//   size: string = "large",
//   text: string = "i love typescript"
// ) {
//   console.log(`Creating a ${size} shirt with the message: ${text}`);
// }
// make_shirt();
// make_shirt("medium");
// make_shirt("small", "i love python");

//                    END.............

//38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//                     START..........

// function describe_city(city: string, country: string = "default country") {
//   console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi", "Pakistan");
// describe_city("Dehli", "India");
// describe_city("Paris");

//                      END.................

//39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//                  START...........

// function city_county(city: string, country: string) {
//   return `${city},${country}`;
// }

// console.log(city_county("Lahore", "Pakistan"));
// console.log(city_county("Dehli", "India"));
// console.log(city_county("Paris", "France"));

//                  END.............

//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//                  START...........

// function make_album(artist: string, title: string, track?: number) {
//   let album: { artist: string; title: string; track?: number } = {
//     artist: artist,
//     title: title,
//   };
//   if (track !== undefined) {
//     album.track = track;
//   }
//   return album;
// }

// let album1 = make_album("artist 1", "album title 1");
// console.log(album1);

// let album2 = make_album("artist 2", "album title 2");
// console.log(album2);

// let album3 = make_album("artist 3", "album title 3", 12);
// console.log(album3);

//                  END.............

// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//                   START.......

// let magicians_name: string[] = [
//   "Harry Potter",
//   "Harmione Granger",
//   "Ron Wasley",
//   "Muhammad Asif",
// ];
// function show_magicians(magician: string[]) {
//   magician.forEach((element) => {
//     console.log(element);
//   });
// }
// show_magicians(magicians_name);

//                  END............

//42.Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//                  START......
// let magicians: string[] = ["Harry Potter","Harmione Granger", "Ron Wasley", "Muhammad Asif"];

// function make_great(magicianArray:string[]){
//     for(let i=0;i<magicianArray.length;i++){
//         // console.log(`The Great ${magicianArray[i]}`)
//         magicianArray[i]= 'The Great ' + magicianArray[i]//====ebhi line likh sakte hn console ki jaga...
//     }
// }
// function show_magicians(magician: string[]){
//     magician.forEach(element=>{
//         console.log(element)
//     })
// }
// make_great(magicians)
// show_magicians(magicians);
//                  END.............

//43.Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//                  START.............

// let magicians: string[] = [
//   "Harry Potter",
//   "Harmione Granger",
//   "Ron Wasley",
//   "Muhammad Asif",
// ];

// function copyArray(arr: string[]) {
//   return [...arr];
// }

// function make_great(magicianArray: string[]) {
//   for (let i = 0; i < magicianArray.length; i++) {
//     // console.log(`The Great ${magicianArray[i]}`)
//     magicianArray[i] = "The Great " + magicianArray[i]; //====ebhi line likh sakte hn console ki jaga...
//   }
// }
// function show_magicians(magician: string[]) {
//   magician.forEach((element) => {
//     console.log(element);
//   });
// }
// const copyMagicianArray = copyArray(magicians);

// make_great(copyMagicianArray);

// console.log("\n\nThis Is My Original Array");
// show_magicians(magicians);

// console.log("\n\nThis Is My Modified Copy Array");
// show_magicians(copyMagicianArray);

//                  END................

//44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//                  START...........

// function sandwich(item: string[]) {
//   console.log("\nMaking Your Sandwish With:");
//   item.forEach((element) => console.log("- " + element));
//   console.log("Enjoy Your Sandwish !:");
// }
// sandwich(["Ham", "Cheese", "Lettuce"]);

// sandwich(["Turkey", "Bacon"]);

// sandwich(["Peanut Butter", "Jelly"]);

//                    END...........

//45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//                  START.........

function StoreCarInfo(
  manufacture: string,
  modelName: string,
  ...extraOption: { [key: string]: any }[]
): object {
  const carInfo = {
    manufacture,
    modelName,
    ...Object.assign({}, ...extraOption),
  };
  return carInfo;
}

let answer = StoreCarInfo(
  "Honda",
  "Civic",
  { color: "black" },
  { features: ["navigation", "Power Window"] }
);

console.log(answer);

//just example k toor pr likha hai......
// function example(...param:string[]){
//     console.log(param)
// }

// example("Taha","Ahmed","Human","Alive","Student")

//                  END............
