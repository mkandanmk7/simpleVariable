// 7. Write 6 statement which provide truthy & falsey values.
/* 

//           truthy statements:

if(1) //true;
if(true)
if(45)
if()
if([])
if("string")
if(new Date())
if(12n)
if(infininty)
if(-infinity)
if(3.23)

//            falsy statements:
if(false)
if(null)
if(0)
if(0n)
if(-1)
if("")
if(Nan)
if(undefined)
*/

//Task 2: Simple Programs todo for Operators

//1.square of number:

let number = 8;
console.log("Squre of 8 is: ", number ** 2); //Squre of 8 is:  64

//2.swap two numbers:
let num1 = 10;
let num2 = 12;
let temp = num1;
num1 = num2;
num2 = temp;

console.log("num1 is:", num1); //num1 is: 12
console.log("num2 is:", num2); //num2 is: 10

//3.Addition of three numbers:

let num1 = 5;
let num2 = 10;
let num3 = 15;
let sum = num1 + num2 + num3;
console.log("sum of three number is:", sum); //sum of three number is: 30

//4. Celsius to Fahrenheit conversion;
// formula;    fahrenheit = celsius * 1.8 + 32

let celsius = 50;
let mul = celsius * 1.8;
let fahrenheit = mul + 32;
console.log("forenheit is:", fahrenheit.toFixed(2)); //forenheit is: 122.00

// 5.Meter to miles //formula: mi=m*0.00062137;


let meter = 100;
let miles = meter * 0.00062137;
console.log("miles is:", miles + "meter"); //miles is: 0.062137meter

// 6.pound to kilograms // 

let pound = 1;
let kilograms = pound / 2.2046;
console.log("kilograms:", kilograms.toFixed(3) + "kg"); //kilograms: 0.454kg

//7.Calculate Batting Average // formula=runs/time;

let runs = 100;
let timesOut = 25;
let battingAverage = (runs / timesOut).toFixed(2);
console.log("Batting Average is:", battingAverage + "%"); //Batting Average is: 4.00%

//8.Calculate five test scores and print their average  (avg= sum/count);

let test1 = 30;
let test2 = 40;
let test3 = 50
let test4 = 60;
let test5 = 70;
let sum = test1 + test2 + test3 + test4 + test5;
let average = (sum / 5).toFixed(2);
console.log("Average of tests:", average + "%"); //Average of tests: 50.00%

//9.Power of any number x ^ y. 
let X = 3;
let Y = 5;
let power = X ** Y;
console.log(`power of ${X} and ${Y} is ${power}`); //power of 3 and 5 is 243

//10.calculate simple interest// S.I=(ptr)/100;

let pAmount = 2000;
let iRate = 5;
let Time = 2;
let simpleInterests = ((pAmount * Time * iRate) / 100).toFixed(2);

console.log("simpleInterest is:", simpleInterests);//simpleInterest is: 200.00

//11.Calculate area of an equilateral triangle // formula: area = ( 1.73 * a*a) / 4  ;

let a = 15;
let area = ((1.73 * a * a) / 4).toFixed(2);
console.log("area of Equilateral triangle is:", area); //area of Equilateral triangle is: 97.31;

//12. Area Of Isosceles Triangle // Formula: area=(b*h)/2;

let base = 7;
let height = 10;
let areaOfIsos = (base * height) / 2;
console.log("Area of Isosceles Triangle is:", areaOfIsos); //Area of Isosceles Triangle is: 35;

// 13.Volume Of Sphere // volume=4/3 (Math.PI*r**3);

let radius = 5;
let volume = ((4 * Math.PI * (radius ** 3)) / 3).toFixed(2);
console.log("Volume of Sphere is :", volume);// Volume of Sphere is : 523.60;


//14.Volume Of Prism // volume=Bh; B=base area, h-height;

let length = 10;
let height = 8;
let width = 7;
let areaOfBase = length * width;
let volume = (areaOfBase * height).toFixed(2);
console.log("volume of prism:", volume); //volume of prism: 560.00;

// 15.Find area of a triangle. area=bh/2;
let base = 10;
let height = 7;
let areaOfTriangle = (base * height) / 2;
console.log("Area of Triangle is:", areaOfTriangle); //Area of Triangle is: 35;

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

let actualPrice = 100;
let soldPrice = 90;
let discountPrice = (actualPrice - soldPrice);
console.log("discount price is:", discountPrice); //discount price is: 10;

// 17.Given their radius of a circle and find its diameter, circumference and area.
// area= (Math.PI*r*r), circumberence=(2*Math.PI*r);

let radius = 7;
let diameter = radius * 2;
let area = (Math.PI * radius * radius).toFixed(2);
let circum = (2 * Math.PI * radius).toFixed(2);
console.log("Diameter:", diameter); // Diameter: 14
console.log("area of circle is:", area); //area of circle is: 153.94

console.log("Circumberence of circle:", circum);//Circumberence of circle: 43.98

//18.Given two numbers and perform all arithmetic operations.
// arithmetic operators: +,-,*,/,**,%,++,--;

let a = 5;
let b = 10;
console.log("Addition:", a + b); 
console.log("subtraction:", a - b);
console.log("multiplication:", a * b);
console.log("division:", a / b);
console.log("modulus:", a % b);
console.log("exponential:", a ** b);
console.log("Increment:", a++);
console.log("decrement:", b--
);

//19.Display the asterisk pattern as shown below(No loop needed):
/*
*****
*****
*****
*****
*****
*/
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****"); 

// 20.Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily
// for one month. Calculate the total energy 
//bill of that consumer if per unit rate is 10?

let watts = 100;    
let price = 9;
let duriation = 30 * 24;
let totalPower = watts * duriation;
let unit = totalPower / 1000;
let bill = unit * price;
console.log("electricity bill :", bill); //electricity bill : 720;

// 21.Program To Calculate CGPA;
// So, CGPA= 9.5 × CGPA

let tamil = 9.0;
let english = 9.8;
let maths = 9.8;
let science = 6.7;
let socialScience = 8.9;

let cgpa = (tamil + english + maths + science + socialScience) / 5;



console.log("CGPA is:", cgpa);//CGPA is: 8.84
