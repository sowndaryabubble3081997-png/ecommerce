let maths= Number(prompt("enter the marks of maths:"));
let science= Number(prompt("enter the marks of maths"));
let english= Number(prompt("enter the marks of maths"));
let social=  Number(prompt("enter the marks of maths"));
let tamil=  Number(prompt("enter the marks of maths"));



let Total=maths+science+english+social+tamil;
let average=Total/5;
let grade;
if (average == 100) {
    grade= "A+";

}
 else if (average >= 90 && average>=89.9) {
    grade = "A";
}
 else if (average <= 70 && average>=69.9) {
    grade = "b+";
}
 else if (average >= 80 && average>=79.9) {
    grade = "b";
}
 else if (average >= 50 && average>=49.9) {
    grade = "C";
}
else if (average >= 50) {
    grade = "pass";
}
 else if (average <50) {
    grade = "FAIL";
}
alert("Total Marks: " + Total);
alert("average:" + average );
alert("grade: " + grade );
console.log("Total Marks: " + Total);
console.log("average:" + average );
console.log("grade: " + grade );
document.write("Total Marks: " + Total);
document.write("average:" + average );
document.write("grade: " + grade );
