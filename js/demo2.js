




// let a = 10;
// a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("unknown");

// let st = "Elzero Web School";
// if(typeof (st.length + st.length) ===typeof "34"){
//     console.log("Good");
// }
// else {
// console.log("osama");
// }
// let price ;
// console.log(` the price is ${price??200}`);
// let name = "osama";
// let gender = "male";
// let age = 20;
// let countery = "Egypt";


// console.log(`Hello ${gender === "male" ? "mr Egypt":"not mr Egypt"}`);


// if (gender === "male") {
//     if (countery === "Egypt") {
//         console.log("mr Egypt");
//     }
//     else {
//         console.log("not mr Egypt");
//     }
// }
// else {
//     console.log("mrs");
// }




// let a="osama ibrahim abdalla";

//console.log(a.substring(2,7));
// console.log(a.substring(7,2));
// console.log(a.substring(-5,7));
// console.log(a.substring(a.length -6,a.length -3));
// console.log(a.substr(0,5));
// console.log(a.substr(-7,5));
// console.log(a.substr(-7));
// console.log(a.includes("ibrahim"));
// console.log(a.includes("ibrahim",6));
// console.log(a.startsWith("ibrahim",6));
// console.log(a.startsWith("osama"));
// console.log(a.startsWith("i",6));
// console.log(a.endsWith("a"));
// console.log(a.endsWith("a",5));
// console.log(a.endsWith("abdalla"));


// let a="osama ibrahim ; abdalla ";
// console.log(a.indexOf("a"));
// console.log(a.length);
// console.log(a.lastIndexOf("a"));
// console.log(a.lastIndexOf("l"));
// console.log(a.slice(2,8));
// console.log(a.slice(6));
// console.log(a.slice(0,-5));
// console.log(a.slice(-7,-5));
// console.log(a.repeat(5));
// console.log(a.split(""));
// console.log(a.split(" "));
// console.log(a.split(";"));
// console.log(a.split("a"));
// console.log(a.split("a",4));


// let the_name="  osama  ";
// console.log(the_name[1]);
// console.log(the_name.charAt(1));
// console.log(the_name);
// console.log(the_name.length);
// console.log(the_name.trim());
// console.log(the_name.toUpperCase());
// console.log(the_name.toLowerCase());
// console.log(the_name.trim().charAt(3).toUpperCase());

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// //find smallest number in all variable and return integer
// console.log(Math.trunc(Math.min(a,b,c,d)));

// //  use variable a + d one time to get the needed output
// console.log(Math.pow(a,Math.trunc(d)));    //10000

// //get integer "2"   from d variable with 4 methodes
// console.log(Math.trunc(d));
// console.log(parseInt(d.toFixed()));
// console.log(Math.floor(d));
// console.log(Math.round(d));

// //use variable b + d to get this values
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));       //66.67
// console.log(Math.round(b) / Math.ceil(d));                    //67






// var num1 = parseInt(prompt("enter number"))
// var num2 = parseInt(prompt("enter number"))
// if (num1 > num2)
//     alert("the number  " + num1 + " largest than " + num2)
// else
//     alert("the number  " + num2 + " largest than " + num1)