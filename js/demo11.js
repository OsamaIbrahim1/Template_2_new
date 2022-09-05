var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");

input1.addEventListener("focus", function (e) {
    input1.style.border = "3px solid blue";
    input1.style.width = "400px";
});
input1.addEventListener("blur", function (e) {
    input1.style.border = "3px solid green";
    input1.style.width = "100px";
});
input1.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        input1.style.border = "3px solid red";
    }
    else {
        input1.style.border = "3px solid yello";
    }
});
input2.addEventListener("focus", function (e) {
    input2.style.border = "3px solid blue";
    input2.style.width = "400px";
});
input2.addEventListener("blur", function (e) {
    input2.style.border = "3px solid green";
    input2.style.width = "100px";
});
input2.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        input2.style.border = "3px solid red";
    }
    else {
        input2.style.border = "3px solid yello";
    }
});
input3.addEventListener("focus", function (e) {
    input3.style.border = "3px solid blue";
    input3.style.width = "400px";
});
input3.addEventListener("blur", function (e) {
    input3.style.border = "3px solid green";
    input3.style.width = "100px";
});
input3.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        input3.style.border = "3px solid red";
    }
    else {
        input3.style.border = "3px solid yello";
    }
});


// let zero = 0;
// let counter = 3;
// let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
// let m = my.slice(0,(++counter)).reverse();
// console.log(m);
// console.log(m.slice(++zero,--counter));
// console.log(my.push("Elzero"));
// let n = my.pop();
// console.log(`"${n}"`);
// let l=n;
// console.log(l.slice(++counter).toUpperCase());
// let a=["osama","ibrahim","abdelfatah","abdalla"];
// console.log(a);
// a.unshift("mohamed");
// console.log(a);
// a.push("zaynab");
// console.log(a);
// let m=a.shift();
// console.log(a);
// console.log(m);
// let n=a.pop();
// console.log(a);
// console.log(n);
// console.log(a.length);
// console.log(a);
// a[2]="mohamed";
// console.log(a);
// console.log(a[2][3]);
// console.log(a.length[2]);
// a[4]="omar";
// console.log(a);
// a[a.length-1]="zeyad";
// console.log(a);
// a.length=3;
// console.log(a);
// var arr = ["osama", "sara", "zeyad", "ibrahim", "omar", "ali", "ahmed", "mohamed"];
// var num =parseInt(prompt("enter num"));
// action(arr,num) {
//     var arr=["osama", "sara", "zeyad", "ibrahim", "omar", "ali", "ahmed", "mohamed"];
//     var num =parseInt(prompt("enter num"));
//     document.write(arr,num);
// }
// action();