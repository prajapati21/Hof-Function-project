// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

let input = "Hello World";

function reverseString(Str) {
      return Str.split("").reverse().join("")
}

setTimeout(() => {
      let reversedInput = reverseString(input);
      console.log(`Wait for Reversing word for Hello World ${reversedInput}`);
}, 2000);


// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.


let delay = 3; // seconds

console.log(`Random number generator started. Waiting for ${delay} seconds...`);

let timer = delay;
let intervalId = setInterval(() => {
    if (timer > 0) {
        //console.log(`Time remaining: ${timer} seconds`);
        timer--;
    } else {
        clearInterval(intervalId);
        let randomNumber = Math.floor(Math.random() * 100); 
        console.log(`Random number generated: ${randomNumber}`);
    }
}, 1000); 


// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

// Store's inventory in USD
let inventoryUSD = {
      "Apple": 10,
      "Banana": 5,
      "Orange": 7,
      "Grapes": 12,
      "Mango": 15
  };
  
  // Exchange rate: 1 USD = 80 INR
  let exchangeRate = 80;
  
  
  let inventoryINR = Object.fromEntries(
      Object.entries(inventoryUSD).map(([item, priceUSD]) => [item, priceUSD * exchangeRate])
  );
  
  console.log("Store's inventory in INR:");
  console.log(inventoryINR);


//   4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.



  // List of books with authors and publication years
let books = [
      { title: "Book1", author: "john doe", year: 2005 },
      { title: "Book2", author: "jane smith", year: 2012 },
      { title: "Book3", author: "bob brown", year: 2008 },
      { title: "Book4", author: "alice johnson", year: 2015 },
      { title: "Book5", author: "mike davis", year: 2018 },
      { title: "Book6", author: "sarah taylor", year: 2002 },
  ];
  
  // Filter books published after 2010 and capitalize author names
  let filteredBooks = books.filter(book => book.year >= 2010).map(book => {
      return {
          title: book.title,
          author: book.author.toUpperCase(),
          year: book.year
      };
  });
  
  console.log("Books published after 2010 with capitalized author names:");
  console.log(filteredBooks);


//   5. URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.



function validateURL(url) {
      
      const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)$/;
    
     
      if (urlRegex.test(url)) {
        console.log(`"${url}" is a valid URL.`);
      } else {
        console.log(`"${url}" is NOT a valid URL.`);
      }
    }
    
    // Test cases
    validateURL("http://example.com");     // Valid URL
    validateURL("https://www.google.com"); // Valid URL
    validateURL("ftp://example.com");      // Not a valid URL
    validateURL("https://123abc.com");     // Valid URL
    validateURL("http://-example.com");    // Valid URL (with special character '-')
    validateURL("https://example.");       // Not a valid URL (missing top-level domain)
    


   // note comment out and show out put