


//to get value of HTML element
//document.getElementById("firstNumber").value;

//to display value:
//document.getElementById("result").value = "";


function calculate() {
    var first_number;
    var second_number;
    var operator;
    var total;

    first_number = document.getElementById("firstNumber").value;
    second_number = document.getElementById("secondNumber").value;
    operator = document.getElementById("operator").value;

    total = parseInt(first_number) + parseInt(second_number) ;

    if(operator == "+"){
        total = parseInt(first_number) + parseInt(second_number) ;
    }
    
    else if(operator == "-"){
        total = parseInt(first_number) - parseInt(second_number) ;
    }

    else if(operator == "/"){
        total = parseInt(first_number) / parseInt(second_number) ;
    }
    
    else if(operator == "*"){
        total = parseInt(first_number) * parseInt(second_number) ;
    }

    document.getElementById("result").value = total;
}

//morning
//afternoon
//evening
var greet;

if(greet == "morning"){
    console.log("This Is Morning");
}
else if(greet == "afternoon"){
    console.log("This Is Afternoon");
}

else if(greet == "evening"){
    console.log("This Is Evening")
}

else{
    console.log("Night Time");
}

var greetings = ["Morning", "Afternoon", "Evening"];

console.log(greetings);
console.log(greetings.length);

console.log(greetings[1]);
console.log(greetings[2]);
console.log(greetings[0]);
console.log(greetings[3]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15];
console.log(primeNumber[primeNumber.length - 1]);

var step = 0;
while( step < primeNumber.length ){


    console.log(primeNumber[step]);
    step = step + 1;

}


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

step = 0;
while( step < numbers.length) {
    
    var isEven = numbers [step] % 2;
    
    if(isEven == 0){
        console.log(numbers[step] + " is even number");
    }else{
        console.log(numbers[step] + " is not even number");
    }

    step = step + 1;
}

//if even number -> "even Number"
// -> "Not Even Number"

//while + if else

//var aa = 4 % 2;
//console.log(aa)

var numbers_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var a = 0 ; a < numbers_2.length ; a++){
    console.log(numbers_2[a]);
}


var collections = [];

console.log(collections);

collections.push("test");

console.log(collections);

collections.push("test 2");

console.log(collections);


var myCollection = [];
function addMe(){
    var myText = document.getElementById("myText").value;
    myCollection.push(myText);

    document.getElementById("myResult").innerHTML = "";
    for( var a = 0 ; a < myCollection.length ; a++ ) {
        var currValue = myCollection[a] + "<br>";
        var currResultValue = document.getElementById("myResult").innerHTML;
        document.getElementById("myResult").innerHTML = currResultValue + currValue;
    }

    //document.getElementById("myResult").innerHTML = "This is Test only";
}

var test = document.getElementById("myResult").innerHTML;
console.log(test);

