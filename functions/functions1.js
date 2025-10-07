function saymyname(){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}
// saymyname();
// function addtwonumber(num1 , num2){
//     return num1 + num2;
// }
// console.log(addtwonumber(2,3))

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}
// const result = addTwoNumbers(2,3)
// console.log("result : " , result)

function loggedin (username = "neeraj"){
    if(username === "undefined"){
        console.log("please enter a valid username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loggedin());
// const result = loggedin("")
// console.log(result);

function calcartprice(val1 , val2 , val3 ,  ...num1){
    return num1
}
console.log(calcartprice(5 , 10 , 15 , 20))

// object in fucntions 
const user = {
    username : "neeraj",
    price : 199
}
function handleobject(anyobject){
    console.log(`Usernamr is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username : "sam",
    price : 399
})
// array in functions 

const mynewarray = [200,400,500,600]
function returnsecondvalue(getarray){
    return getarray[2]
}
console.log(returnsecondvalue(mynewarray))