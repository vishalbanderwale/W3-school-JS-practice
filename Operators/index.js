//Operators: used to perform mathmatical and logical operations
/*
1)arthimetic opeartor: addition(+),subtraction(-),multiplication(*),division(/: gives quotion),
modulus(%: gives reminder),++(increment),(--)decrement, , exponentiation operator (**):let x=5,let z=x**2=>5 power 2 (25)
2)logical opeartor: logical and (&&), logical OR (||), logical NOT (!)
3)assignment operator: =(assign value to variable,etc): let x=10,x+=10=>x=x+10;
4)comparsion(conditional) operators:equal to operator: ()== check equal value ,(===)check equal value and data type,
(!=) not equal to value 
(!==)not equal to value and data type
 greater than (>), less than (<), greater than equal (>=), less than equal (<=), (?)ternary opeartor
5)string operator: "hello" + "world" =hello world(concatenate) : When used on strings,
 the (+) operator is called the concatenation operator.
 the primary string operator is the concatenation operator (+), which is used to join two or more strings together.
6)typeof  operator:Returns the type of a variable
*/

//100+50=150 (100 & 50: The numbers (in an arithmetic operation) are called operands. and
// + : The operation (to be performed between the two operands) is defined by an operator)

const arr = [1, 12, 4];

const obj = {
  name: "vishal",
  age: 25,
};

console.log(typeof 13); //number
console.log(typeof "vishlal"); //string
console.log(typeof null); //object: due to historical bug refer chatgpt
console.log(typeof obj); //undefined
console.log(typeof true); //booelan
console.log(typeof arr); //array is special type of object
console.log(typeof obj); //object

//Type conversion

/* Implicit Casting (Type Coercion): JavaScript automatically converts data types 
when it thinks it’s necessary.
Explicit Casting: The developer manually converts data types using functions or operators. */

//When JavaScript tries to operate on a "wrong" data type,
// it will try to convert the value to a "right" type.
//Null value = 0;

// exapmples of impliict casting

console.log(1 + "5"); //15
console.log("40" + 1);  //401
console.log("250" + 2 + 1); //25021
console.log(24 + 2 + "345"); //26345
console.log("sonu" + 12);  //sonu12

//examples of explicit casting

//string to Number conversion
console.log(Number("123")); //123
console.log(Number("vishal")); //NAN
console.log(Number(" ")); // 0
console.log(Number("99 88")); //NAN

//String conversion

console.log(String(123)); //123
console.log(String("vishal")); //vishal

//Boolean to numbers

console.log(Number(false)); //0
console.log(Number(true)); //1

//booelan to string

console.log(String(false)); // false
console.log(String(true)); //true

//string to boolean

console.log(Boolean("hello")); //true
console.log(Boolean(" ")); //false (because empty string is 0)

//number to boolean

console.log(Boolean(123)); //true
console.log(Boolean(0)); //false
