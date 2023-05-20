/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Eleonor Rose Torrente Student ID: 118492222 Date: 20 May 2023
*
********************************************************************************/ 

// Step 2: "Hello World" 

console.log("Hello World!");

// Step 3: Creating the "Server Paths"

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1", 
    "This assignment was prepared by Eleonor Rose Torrente", 
    "Eleonor Rose Torrente: etorrente@myseneca.ca", 
    "User Logged In", 
    "Main Panel", 
    "Logout Complete"];

// Step 4: Creating the "web server simulator" Function -"httpRequest"
 
function httpRequest(httpVerb, path) {
    for (var index = 0; index < serverPaths.length; index++) {
      if (serverVerbs[index] === httpVerb && serverPaths[index] === path) {
        return  `200: ${serverResponses[index]}`
        };
      }
    return `404: Unable to process ${httpVerb} request for ${path}`
    ;
  }

// Step 5: Manually testing the "httpRequest" Function

console.log(httpRequest("GET", "/"));
console.log(httpRequest("GET", "/about")); 
console.log(httpRequest("PUT", "/")); 

console.log("\n")

// Step 6: Automating the Tests by creating an "automateTests" Function

function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }
  
  function automateTests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
  
    function randomRequest() {
      var randVerb = testVerbs[getRandomInt(testVerbs.length)];
      var randPath = testPaths[getRandomInt(testPaths.length)];
      var result = httpRequest(randVerb, randPath);
      console.log(result);
    }
  
    setInterval(randomRequest, 1000);
  }

// Step 7: Invoke the "automateTests" function

automateTests();