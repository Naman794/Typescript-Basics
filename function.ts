#Rest Parameter:

function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

#Default parameters:

function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

#Function constructor:


console.log(x);

#Recursion:
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));


#For lambda:

var foo = (x:number)=>10 + x 
console.log(foo(100)) 


#Lambda Statement:

var foo = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)


#Parameter type interface:

var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(12) 
func("CodeX !")


#Function Overloop:


function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");

#
