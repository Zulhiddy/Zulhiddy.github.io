
function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2 + ", " + myLocation3;
    console.log(myName);
}

calculate("One North", "JTC Launchpad", "Blk 79");
calculate("test", "test");

function getmyFullname(){
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName
    return fullName;
}

var myfullName = getmyFullname();

console.log(myfullName);

function myGreetings (secondGreeting, thirdGreeting, bornYear) {
   var age = 2018 - bornYear;
    var greeting = "Hello, " + secondGreeting + " " + thirdGreeting + " " + age; 
    console.log(greeting);
}

myGreetings("Good Morning", "Zulhilmi");
myGreetings("Good Afternoon", "Hiddy" )

function address(myAddress2, myAddress3) {
    var myAddress = "Ubi Ave 1" + ", " + myAddress2 + ", " + myAddress3;
    console.log(myAddress);
}
address("Blk 322", "#22-999");

myGreetings("Zulhilmi", "Sapari", 1993);
myGreetings("Hiddy", "Adnan", 1994)


function testMe(){
    alert("Hi, you hit the buton");
}
