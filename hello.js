/*console.log("hello javascript"); 
console.log('Namstey Javascript');
console.log(7+5);


var message;
message = "Namastey Javascript"
console.log(message);
console.log(message); 

 
var a;
a = 5;
console.log(a);
document.getElementById("test").innerHTML="JavaScript Document"; 
document.write("javascript");
console.log('helo World to JavScript 2023'); 
var x=8;
var y=10;
var z=x+y;
console.log(z);

// let x=("Name", "Role","Company",'year');
// let y=("Abhishek","intern","kp CX","2023");
// let z=("Abhishek","intern","kp CX","2023")
// console.table(`${x} ${y} ${z}`);
let x="hello";

let y="helloo";
alert(x,y); 
let x= 4>3;
alert(x);
let x = "abhishek";
console.log(typeof x);
// javascript object are written in curly braces{}
// object properties are written as name:value pairs,seprated by commas. 
//var arrFact = [17,'yes','india','punjab','majha'];
let age=18;
let hasvotercard = 'Yes';
let country ='India';
let state ='punjab';
let district ='majha';
if(age>=18 && hasvotercard == 'Yes' && country =='India' && state =='punjab' && district =='majha' ){
    alert("Congratulation,you can Vote!");
} else{
    alert("Sorry,you can't Vote!");
}
//ternary operator///
let loggedin=0; // 0 is loogedout 1 is logIN
if (loggedin==1){
    document.write('LogIn');
} else{
     document.write('LogOut');
}

let option = loggedin == 0 ?"logout":"logout" 
alert("Abhishek Thakur");
let user;
user == "Abhishekthakur";
alert(user ?? "Guest User");

//Switch statement---
switch(new Date().getDay()){
    case 0:
        day="sunday";
        break;
    case 1:
        day="monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day="wednesday";
        break;
    case 4:
        day="thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="saturday";
        break;
    default:
}
// switch account 
let x=5;
console.log(sizeof(x));

let str ='Masteringjs.ioF';
str.slice(0,-f);

var Str = "Hello World!"
var newStr = Str.replace('','')
console.log(newStr);
/*
let input;
input="1";
if (input===1){
    document.write("continue....");
}else if(input===y){
    document.write("End..");
}
// In Switch statement only === will work other == won't work!!
//=== do the comparision.
switch(input);
Break statement is used to break the statement and executed the next statement// 

let str ='Hello World';
console.log(df = str.slice(1, -1));
let counter = 0;
while(counter <=10){
    document.write('ak47');
}

let counter=1;
while(counter <=10){
    document.write('Thakur');
    counter= counter +2;
}

let counter =1;
let sum=0
while( counter <= 100){
    if(counter % 2 == 0){
        sum = sum + counter;
    }
    counter++;
}
let type= 5;
alert(typeof type);


let str ='abhishekThakur';
console.log(str[3]);

//string concatenation 

let str="Abhishek ";
let str2="Thakur";
console.log(str+str2);


//comparision of two string
// comparison happen with == sign!

let str="Abhishek";
 if("Abhishek" ==str){
    console.log("equal")
 }else{
    console.log("not Equal")
 }
 
 // funtion to manipulate the string!!!!
// string concatenation....

let str="abhishek";
let str2="thakur ";
let str3=str.concat(" ",str2);
console.log(str3);

let str="Kapture CRM streamline your sales and boost up your"
let newstr="Kaptur and Kapture The CRM"
console.log(str.textreplace);

let book1="english ";
let book2="hindi ";
let book3="urdu ";
let book4="punjabi";
console.log(book3);

//<><><<><><<><><><><><><> Array in javascript<><><><>><><><>><><>><><><><>><><>><><><><><>//

let book=['English','hindi','punjabi','urdu','telgu'];
let book2=new['hind','english','punjabi','urdu','tamil'];
console.log(book+book2);

const fruits=["banana","Apple","grapes","mango"];
console.log(fruits);
document.getElementById().innerHTML=fruits.toString();
const fruits=["banana","Apple","grapes","mango"];
fruits[1]=Banana1;

/// JavaScript Mastery from HYT
let firstName='Abhishek';
// A B H I S H E K
// 0 1 2 3 4 5 6 7
//console.log(firstName[7]);     //to find the index of your string //
//console.log(firstName.length);   // to printout the length of the string //
console.log(firstName[firstName.length-2]); // to print out the last lenth of the string,
when you dont know about length of the string.

let str="Abhishek Thakur"
console.log(str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0,5));


//array Non Primitive data structure:: Refrence variable //
//Array:Array is the collection of elements.
//Array:order collection of the item.
 
let fruits=["apple","banana","grapes","orange","kiwi","lemon"];
console.log(fruits);
let number=[1,2,3,4,];
console.log(number);
let mixed=["apple",1,2,3,7.5,9.7,9,"kiwi"];
console.log(mixed);
// to access the index we need [] square bracket//

let fruits=["Apple","Mango","Kiwi"];
console.log(fruits);
fruits[2]="orange";
console.log(fruits);

let fruits=["Apple","Mango","Kiwi"];
console.log(typeof fruits);
console.log(Array.isArray(fruits));
//console.log(Array.isArray) is used to print the array type or not //

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><<><><><><><>
//arrays Method;
// array push pop
//array shift unshift

let fruits=["Apple","Mango","Kiwi"];
console.log(fruits);
//Array is mutable:It have capabilities to change the original array  // 
//push is used to add the element in the last //
fruits.push("lemon",'orange','pineapple','fig',"lime");
console.log(fruits);
console.log(fruits.pop());
let poopedfruit=fruits.pop();
console.log(fruits);
console.log("poopedout fruits  is" , poopedfruit); 
<><>><><><><><><> used to add the element in starting<><><><><><><><><<<<<<><><>
fruits.unshift("banana");// unshift is used to add the element in the array first position[]
console.log(fruits);
console.log(shift);
// push and pop is fast as compared to the speed...///

//--Primitive vs reference data type....// Most Important topic
let num1=6;
let num2= num1; 
console.log("value is num1 is",num1);
console.log("value is num1 is",num1);
num1++
console.log("After incrementing the number")
console.log(num1); 
console.log(num2);

// Reference type in JavaScript //////
//array:array is reference type //////
let array1=[6];
let array2= array1; 
console.log(array1);
console.log(array2);
array1++ 
console.log("After incrementing the number")
console.log(array1);
console.log(array2);

let array1=["item1","item2"];
let array2=array1;
console.log(array1);
console.log(array2);
array1.push("item3","item4","item5");
console.log("after pushing the element into this");
console.log(array1.length);
console.log(array2);
console.log();
output:


// W3 
let fruits=["apple","orange","kiwi"];
delete fruits[1];
console.log(fruits);

let fruits2=["apple","kiwi","orange","lime"];
delete fruits2[2];
console.log(fruits2);

var num1=50;
var num2=num1;
console.log(num1,num2);
var num1=100
console.log(num1);
console.log(num2);

// To update the object in the Javascript---//
// Updation of the object in JavaScrit---///
let object1= {
name:'Vignesh',
age:'28',
city:'kullu',
state:'Haryana'
};
let object2=object1;
// updating object1,
object1.age=26;
object1.city='shimla'
object1.state='Himachal Pradesh'
//console.log(object2);
let object3=object2;
object2.age='29';
object2.city='manali';
object3.state='panjab';
console.log(object3);
//Another difference comes in when we update object1. 
//If we log both variables to the console, we see that the change affected them both. 
//This is because they are pointing to the same object on the heap – and updating one variable of course affects the other.

let array1=["item1","item2"];
let array2=array1;
console.log(array1);
console.log(array2);
array1.push("item3","item4","item5");
console.log("after pushing the element into array1");
console.log("array1",array1);
console.log("array2",array2);
console.log();
// Here the data store in the the same stack with same address in the memory.so thats why when we push the
// data in the array1. It will print the data same as to the array2 because both array1 and two having smae memory address.

/////HOW to clone the ARRAY----//
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
//how to concate two array----//
<><><><><><><><><><><><><><><><><><>
let array1=['item1','item2'];
let array2=['item1','item2'];
array1.push=['item3','item4'];
console.log(array1);
console.log(array2);
console.log(array1===array2); // To check the two array are equal or not used (===)
// if your array is having multiple array data ///////
// To clone the array.used slice method//

let array1=['item1','item2','item3'];
let array2=array1;
console.log(array1,'\n',array2);

let array1=['item1','item2','item3','item4'];
let array2=array1.slice(0).concat(['item5','item6']) // To concat the two array  
console.log(array2);

//other method to concat the array element is//
//let array2=[].concat(array1,['item6','item7']); // this method is also used to concate the two array.
let array2=[...array1,'item5','item6']; // Spread Operator: this method is most useful method in order to copy the element from one array to another.
console.log(array2);
////////////////////////////////////////////
<>>><>
<><>>>
//for loop in the array //
<><><>><>
2console.log(fruits.length); 
console.log(fruits[fruits.length-4]);
for(let i=0;i<fruits.length;i++){  //used to run the array (for loop)//
    console.log(fruits[i].toUpperCase()); 
}

//used const for creating array
let fruits=['Apple','kiwi'];
fruits.push('lime');
console.log(fruits);
// To assign the error most cases use the  const


// while loop in JavaScript  ////
const fruits=['apple','grapes','kiwi'];
const fruits2=[]; // to psuh the element in the array of fruits2
let i=0;
while(i<fruits.length){
    fruits.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);


// for of loop in the array //////
const fruits=['kiwi','fruits','lemon'];
const fruits2=[];
//loop == Iterate 
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);
///
//for in loop in array ///

const fruit=['kiwi','fruits','lemon','appple'];
const fruits2=[];//
for(let index in fruit){              ///instead <of> we used <in> for in loop array
    console.log(fruit[index].toUpperCase());         
     // To wrote the index it will give you index of an array in form ///
}
/// for of loop and traditional for loop used max time ////
for(i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
///Array Destructing// used ES6
const array=['value1','value2'];
let var1= array[0];
let var2=array[1];
console.log("value of var1",var1);
console.log("value of var2",var2);
// shortcut method //////

const myarray=['value1','value2','value3','value4','value5'];
let[var1,var2, ...newarray]=myarray;  /// here , is work as seprated the var2 and var 3 because we put three 2 commas here,,
console.log('value of var1',var1);
console.log('value of var2',var2);
console.log(newarray);
// here dot ... can stor the next array element of the myarray into console.log(newarray)

//object dont have index like array//
// In Javsascrit object are king. if you understand the object you will underetand the javascript
//objext starts from here ///////////////////////////////////////////////////////
// to represent object used {} curly braces

const person={name:"Abhishek Thakur",age:22}; //string+number
 /// here person is object..THis is also called as object literal
console.log(person);
console.log(typeof person); op=object
console.log(person.name); op=Abhishek Thakur
console.log(person.age); output=22
const person2={
    name:"Gandhi",
    age:22,
    hobbies:["walking","sleeping","writting"]
}
console.log(person2.hobbies);output //

// how to add the key value pair to objects //
person.gender="male"
console.log(person); // to add the key value properties in the object use this function
// string is by defualt take "" in javascript

//Differecne between dot and bracket in the array[]
 
const key="email";
const person={
    name:"abhishek",
    age:22,
    hobbies:["singing","dancing"],
    "school name":"sarswati vidya mandir" // to acces this type of object properties used[] bracket to access

}
console.log(person["school name"]); // here is the example of dot and bracket // ["school name"="school name"]
person[key]="abhishek@gmail.com"
console.log(person)

/////
////How to iterate the object //////
const person={
    name:"abhishek",
    age:22,
    hobbies:["singing","dancing"],
}
// To run the loop in the object we used two methods
// for in lopp
// object.keys
for(let key in person){
    //console.log(person[key]);
    console.log(key,":",person[key]);
} 

const key1="objkey1";
const key2="objkey2";

const value1="value1"
const value2="value2"

const finalkey={
    [key1] :"value1",
    [key2] :"value2" // here these square bracket are used to copy the value from previosuly declraed variable
}
console.log(finalkey);


// Spread Operator in javascript //
// Spread Operator:
const array1=[1,2,3,4,5,6];
const array2=[7,8,9];
const newarray=[..."3.14"]; // to seprate the array give ... three dot and it will print like this: "8","5","8"
//integer is not iterable.[ to make integer to string used the "" to it 1234=error,"123"=working as:"1","2","3"
// if you are writting number here and not giving "" then it will give you error because integer is not iterable....
console.log(newarray);
<><><><><><>
<><><><><><><>><><>
//spread operator in object case//
const obj1={
    key1: "value 1",
    key2: "value 2",
    key1: "Value1" // In javascript the last value will get updated not the first value // value 1 is not equal to value1
}
console.log(obj1);
output:value1,value 2
const obj2={
    key1: "value 3",
    key2: "value 4",
    key1: "value3" // In javascript the last value will get updated not the first value // value 3 is not equal to value3
}
console.log(obj2);
output:value3,value4

//const newObject={...obj1, ...obj2}
//console.log(newObject,[obj1]);
const newObject={..."8580405700"};
console.log(newObject); // To find out the index of an array in javascript.used as three dot ..."abc"
// here instead of string you can use as number also//
//The Index will run like < 0:position char/num >,< 1:position of second char/num >


// Destructuring in the case of Object in javascript //

const band={
    bandName: "Sidhu MooSEWALaA",
    famousSong:"The last ride",
    year: 1968,
    anotherFamousSong: "Kashmir_jhelum"
};
const bandname=band.bandName;
const famousSong=band.famousSong;
const year=band.year;
const anotherFamousSong=band.anotherFamousSong;
console.log(bandname,famousSong,year,anotherFamousSong);
// here let and var is differently used so processed with choice //


// object Inside array // 
// very useful in the real world application //
const users=[
    {userId:1,firstName:'Mohit',Gender:'Male'},
    {userId:2,firstName:'Rohit',Gender:'Male'},
    {userId:3,firstName:'Kohit',Gender:'Male'},
    {userId:4,firstName:'lohit',Gender:'Male'}
]
console.log(users);
for(let user of users){
    console.log(user.userId,"#",user.firstName,"*",user.Gender);
}

//Nested destructuring
const users=[
    {userId:1,firstName:'Mohit',Gender:'Male'},
    {userId:2,firstName:'Rohit',Gender:'Male'},
    {userId:3,firstName:'Kohit',Gender:'Male'},
    {userId:4,firstName:'lohit',Gender:'Male'}
]
const[{firstName:userfirstName}, ,{Gender}]=users;
console.log(userfirstName);
console.log(Gender);
// console.log("\n",user1,"\n",user2,"\n",user3,"\n",user4); //To print the all object element in the new line 


// classes in JavaScript //
// Syntax of Javascript //
class className{
    constructor(){
        // always add a method name constructor():
    }
}
class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
}
}

// The above example creates a class name car and they have two propwerties which is name and year///
/**The Constructor Method
The constructor method is a special method:
<><><<><><><><><<><><<><><><><>><<><<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><><>><<><><><><>
1.)It has to have the exact name "constructor"
2.)It is executed automatically when a new object is created.
3.)It is used to initialize object properties
4.)If you do not define a constructor method, JavaScript will add an empty constructor method.*/


// Function starts from here ///////////////////
//44 File of Harshit YT channel   /////////////
//function in JavaScript /////////////
// A Javascript is the function of block of code designed to perform a Particular task ///
// A Javascript fucntion is executed when "something" invokes it (calls it).
/*
function singhappybirthday(){
    console.log("happy birthday to you");
}
function twoplusfour(){
    console.log(2+4);
}

// singhappybirthday()
// twoplusfour()

let newPlus = twoplusfour();
console.log(newPlus);

////
// Fucntion is always in the form of repeatable 

//Declaration: Function can be declared in the form where one is keyword and other is your fucntion name and
//after you can decrlaration the fucntionname()
// fucntion can be call after you can declared the same.
// if you declared the function first and calling it above in the code somewehere else it will give the result()


function sumoftwonumber(number1,number2){
    return number1+number2;
}
const returnedValue =sumoftwonumber(4,5);
console.log(returnedValue);

function isEven(number){
    if(number % 2 === 0){
        return true
    }else{
        return false
    }
    
}
console.log(isEven(12))

function isOdd(number){
    if(number % 2 === 1){
        return true
    }else{
        return false
    }
    
}
console.log(isOdd(6))

// print the first character of the string //

function firstChar(any){
    return any[0];
}
console.log(firstChar("raj"));


function findTarget(array,target){
    for(i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,3,4,5];
const ans= findTarget(myArray,4);
console.log(ans);

////


///arrow function
// just to remove the fucntion and wrote => and this is your arrow fucntion
////


const app = ()=>{
    const add = ()=>{
        console.log("hello add");
    }
    const sumoftwonumber=(num1,num2) =>{
        return num1+num2;
    }
    const mul=(num1,num2)=>{
        return num1*num2;
    }
    console.log("hello world in JavaScript");
    add()
    console.log(sumoftwonumber(4,4))
    console.log(mul(6,8))
}
app()

// lexical scope//
// block scope vs fucntion scope
// let and const are block scope
// var is fucntion //

{
    var firstName=("Abhishek Thakur");
}
console.log(firstName);
// error: let and const can be access only with in thier varibale block
*/
// function addTw0(num1,num2){
//     if(typeof num2==="undefined"){
//         num2= 1;
//     }
//     return num1+num2;
// }
// const ans=addTw0(4);
// console.log(ans); 
// after ES6 2015 came into the picture//
// New Approach: Here you can initialize this on the 
// function addTw0(num1,num2=8){
//     return num1+num2;
// }
// const ans=addTw0(4);
// console.log(ans); 



{/* <div data-controller="lazyplay" class="u-relative u-maxw-11 u-mx-auto u-hidden md:u-block" style="max-width:1024px;max-height:620px;">
<video preload="none" loop="" playsinline="" muted="" src="/livechat-channels.22ffb37b09dc98a076bee34058689ef02da40ee00af6712288b01281e6140c6c.mp4" width="1024" height="620" style="--aspect-ratio: 1024/620;" title="Omnichanel live chat diagram" data-lazyplay-target="video" poster="/livechat-channels.5f56bad9e01622a593ec23967d690cfbe02b46ee29fa158a9d4ac84ccf7e0212.jpg"></video>
      
<img src=".../javascript" loading="lazy" width="1024" height="620" data-lazyplay-target="poster" style="position:absolute;top:0;left:0;width:100%;" data-action="click->lazyplay#play" hidden="">
</div> */}

// Rest fucntion:
// The rest parameter ... allows a function to retreat an indefinate number of arguments as an array:
// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(1,2,3,4,5,6,7,8);

// Rest function to add the two number ;
// function myfunc(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// myfunc(1,2,3,4);

//   function addAll(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     return total;
//   }
//   const ans = addAll(5,5,5,5,5);
//   console.log(ans);

  // By adding the data in the form of two variables.

  //Param Destructuring ...........//
  
  /*const person={
    name: "Abhishek Thakur",
    gender:"male",
    age:25,
  }
  function printDetails({name,gender,age}){
    console.log(name)
    console.log(age)
    console.log(age);
  }
  printDetails(person);

// This method is mostly used in the react application...........///


/// call back can be used in the Asynchronous //////
 function myfunc(name){
    console.log("hello thakur")
    console.log(`your name is ${"Thakur"}`);

}
function myFunc(callback){
    console.log("hello there I am func and I can ...")
    callback();
}
myFunc(myfunc);



/// File: Function returning function.........////
function myfunc(){
    function hello(){
        console.log(myfunc);
    }
    return "name: abhishek,age:25";
}
const ans=myfunc();
console.log(ans);
<><><><><><><><><><><><><><><><><><>

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}
const ans=myFunc();
console.log(ans());

// this is fucntion returning function  ///////

///filter method:
//filter return a new array of filter element that meets a certain  condition.
//The filter() method creates a new array with all elements that pass the test implemeneted by the provided
///
// This is filter method
const word=['spark','love','text','chatting','reading','working'];
const result= word.filter(word =>word.length>6);
console.log(result);
//


// This is Map method ///
//Map Method:The map method calls a callback function on every element of an array and return a new array that contains the result
// The map() method takes two named arguments.
const Array=[1,2];
const newArray=Array.map(x=>x+1);
console.log(newArray);

const array=[2,4,6,8];
const map1=array.map(x=>x*2);
console.log(map1);

var araay=["Abhishek"];
const newArray1=araay.map(x=>x+"thakur");
console.log(newArray1);



const number=[1,2,3,4,5];
function mulBy2(number,index){
    console.log("index is",index);
    console.log(`${number}*2=${number*2}`);
}
for(i=0;i<number.length;i++){
    mulBy2(number[i],i)
}


const array=[2,3,4,5];
array.forEach((array,Index) => {
    console.log(array * 3,Index);
})
const users=[
    {fristName:"radha",age:25},
    {fristName:"raja",age:25},
    {fristName:"rama",age:25},
    {fristName:"ria",age:25},
]
users.forEach(function(users){
    console.log(users.fristName,users.age);
})
for(let user of users){
    console.log(user.fristName);
}

/// map method ////
const number=[1,2,3,4,5,6,7,8,9];

const square=function(number){
    return number*number;
}
// map fucntion will create always new array.due to this it is necessary to return here
// if you are not returning anything which mean it returning by defualt "undefined".
const squareNumber=number.map(square); 
console.log(squareNumber);

const numbers=[1,2,3,4,5,6];
const isEven=function(number){
    return number%2==0;
}
const evenNumber = numbers.filter(isEven);
console.log(evenNumber);
 //// reduce method ////////////
 /// In the reduce() method executes a reducer function on each element of the array and returns a single output value.

 

const number=[1,2,3,4,5];
// aim:sum of all numbers in array
const sum=number.reduce((accumalator,currentValue) => {
return accumalator + currentValue;
});
console.log(sum);


const numm=[3];
const multiply=numm.reduce((accumalator,currentValue) =>{
    return accumalator / currentValue;
},0);
console.log(multiply);


// Sort Method //
//The sort element sort the element of an array in place and return the sorted array

const array=[14,4,1];
const newArray=array.sort(array.reverse[array]);
console.log(newArray);

const userCart=[
    {productid1:1,productName:"Apple",cost:12000},
    {productid1:2,productName:"Oppo",cost:12000},
    {productid1:3,productName:"Mi",cost:12000},
    {productid1:4,productName:"Oneplus",cost:11000},
    {productid1:5,productName:"Vivo",cost:12000},
    {productid1:6,productName:"Nothing",cost:11000},
    
]
const sum=userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.cost;
},0);
console.log(sum);

// Sort method //
The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

 const number=[200,11,23,67,98];
 const newNumber=number.sort((a,b)=>a-b);
 console.log(newNumber);
    ///07:25:31 price high to low and high to low


const product=[
        {productid:1,prodcutName:"apple11",price:60000},
        {productid:1,prodcutName:"apple12",price:70000},
        {productid:1,prodcutName:"apple13",price:80000},
        {productid:1,prodcutName:"apple14",price:90000},
        {productid:1,prodcutName:"apple11pro",price:40000},
        {productid:1,prodcutName:"apple12pro",price:50000},
        {productid:1,prodcutName:"apple13pro",price:45000},
        {productid:1,prodcutName:"apple14pro",price:65000},
]
const priceHightoLow=product.slice(0).sort((a,b)=>{
    return b.price-a.price;
});
console.log(priceHightoLow); 

const priceLowtoHigh=product.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log(priceLowtoHigh);

const productfav=[
    {productidd:1,category:"Mens-collection",subcategory:"mens-sub",price:2000},
    {productidd:2,category:"Mens-collection",subcategory:"mens-sub",price:9000},
    {productidd:3,category:"Mens-collection",subcategory:"womens-sub",price:8700},
    {productidd:4,category:"Mens-collection",subcategory:"mens-sub",price:1000},
    {productidd:5,category:"Mens-collection",subcategory:"boys-sub",price:8000},
    {productidd:6,category:"Mens-collection",subcategory:"girls-sub",price:6000},
    {productidd:7,category:"Mens-collection",subcategory:"men-boy-sub",price:3000},
    {productidd:8,category:"Mens-collection",subcategory:"mens-sub",price:7800}
]
const finalproductfav=productfav.slice(0).sort((fava,favb)=>{
    return fava.subcategory/favb.subcategory
})
console.log(finalproductfav);

const badmintontimeslot=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
for(i=0;i<23;i++){
    return true,
} else {
    return false,
}
const bookslottime=badmintontimeslot.slice(0).sort((a,b))=>{
    return 
}

const array=["cat","dogs","tiger","lion"];
function isLength3(string){
    return string.length === 3;
}
// const ans=isLength3("tiger");
// console.log(ans);    
array.find(isLength3);

//Asynchronous java Script //
console.log("script start");
for (let i=1; i<1000;i++){
    console.log("inside loop array");
}
console.log("script end");


console.log("script start");
setInterval(()=>{
    console.log(Math.random());
},1000)
console.log("script end");
*/

// How javaScript Works ///
//  var priceone=10;
//  var pricetwo=10;
//  console.log(priceone==pricetwo);
//  console.log(typeof priceone);
 
// Find Method in Javascript //
// const array=["hello","cat","dog","lion"];
// function isLength3(string){
//     return string.length===3
// }
// const ans= array.find(isLength3);
// // const ans= array.find((string)=>string.length===3); // you can this as arrow function to with your understanding
// console.log(ans);

// //Real exam //
// const users = [
//     {userId:1, userName:"Rohit"},
//     {userId:2, userName:"Mohit"},
//     {userId:3, userName:"Ronit"},
//     {userId:4, userName:"Mohit"},
// ]
// const ans= users.find((user)=>user.userId==3);
// console.log(ans);

// //Every Method //
// const numbers=[2,4,6,8,10,11];
// const ans1=numbers.every((number)=>number%2===0)
// console.log(ans1);
// //every methd
    
//callback fucntion will return true or false value (boolean)

// some method //
// const number=[1,2,3];
// const ans=number.some((number)=>number%2===0);
// console.log(ans);
// //fill method
// // value,start,end
// const myArray=new Array(10).fill(8);
// console.log(myArray);

// splice method//
// const myArray=['item1','item2','item3'];
// // delete
// myArray.splice(2);
// console.log(myArray);
// insert
// myArray.splice(3,0,"item 4")
// console.log(myArray);

// //insert and delete item 
//   const firstname="Abhishek"
//   for(let char of firstname){
//     console.log(char);
//   }
// const items=['item1','item2','item3'];
// for(let item of items){
//     console.log(item);
// }
// const myArray=[1,2,3,4,4,5,5,6,6];
// const uniqueElement=new Set(myArray);
// console.log(uniqueElement);

/// Map data Structure ///
// const person={
//     firstName:"abhishek",
//     lastName:"Thakur",
//     age:7,
//     city:"bangalore",
//     1:"one"

// }
// // console.log(person.firstName);
// // console.log(person.age);
// // console.log(person);
// // console.log(person['1']);
// for(let key in person);
// console.log(typeof key);

// map method: 
// const person = new Map();
// person.set('firstName','Abhishek');
// person.set('age',7);
// person.set('state','Himachal Pradesh')
// person.set('Gender','male')
// console.log(person.get('firstName'));
// console.log(person.get('age'));
// console.log(person.keys());
// for(let key of person.keys()){
    // console.log(key ,typeof key);


// 2nd lecture starts from here:
// compilation
// code execution
// why compilation
// How javaScript code executes
// what is global execution context?
// what is local execution context?
// closures
// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName="Abhishek";
// console.log(firstName);
// compile>execute.
//compilation phase
//1.)tokenizing/lexing
//2.)Parsing
//3.)Code Generation
//--------------Compilation Phase:
//[early eError checking is required]
// DetermiEng appropriate scope for variable 
// how javEascript code get executed
//--------E------Code execution phase:
//Note:In EjavaScript code executes inside execution context
// Global Eexecution context
//1.)CreatEion phase
//2.)Code Execution phase

//GEC Global execution context


//JavaScript call back  //
//understanding call back:
/*function myFunc(){
    console.log("function is doing Task 1");
    callback();
}
function myFunc2(){
    console.log("function is doing Task 2");
}
myFunc(myFunc2);

//Example of callback :The call back function here tell the defination of the function how we calling it here
function getTwoNumbersAndAdd(number1,number2,onSuccess, onFailure){
    if (typeof number1==="number" && typeof number2==="number"){
    onSuccess(number1,number2);
    } else {
        onFailure();
    }
}
// function addTwoNumbers(num1,num2){
    // console.log(num1+num2);
// }
getTwoNumbersAndAdd(6,7,(num1,num2) =>{
    console.log(num1+num2);
}, ()=>{
    console.log("wrong data type");
    console.log("please pass number only")
});
*/

//callbacks,callback hell,pyramid of DOOM]
//Asynchronous Programming]
// 

// // find the third largest element in the array
// function PrintThirdSmallest(array,n){
//     // Sorting the array
//     array.sort((a, b) => a - b);
//     // console.log('First min = ' + array[0]);
//     // console.log('Second min = ' + array[1]);
//     console.log('Third min = ' + array[0]);
// }
 
// // Driver code
// let array = [4, 9, 1, 32, 12];
// PrintThirdSmallest(array,array.length);
// Javascript is synchronous programming language and it is single threaded

console.log("Abhishek Thakur")
for(i=0;i<36000;i++){
    console.log("9589367808")
}
console.log("End of the Script");