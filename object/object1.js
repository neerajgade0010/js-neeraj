const { use } = require("react")

const mysym = Symbol("nilam") // gives unique key 
// symbol is used to create a unique property key for object 
// keys that wont clash with any other key

const jsuser = {
    name : "neeraj",
    [mysym] : "saee",
    age : 24, 
    location : "Pune",
    email : "neerajgade00@gmail.com",
    isLoggedin : true,
    // "last name" : "gade",
    lastloggedin : ["monday" , "saturday"]
}

// console.log(jsuser.name)
// console.log(jsuser["name"])
// // console.log(jsuseruser)
// //by above line you cant use because its syntax is differnet cant use with .method 
// console.log(jsuser["last name"])
// console.log(jsuser[mysym])
// console.log(jsuser["email"])
// // if we want to change some value from object 
// jsuser.email = "neerajravindra10@gmail.com"

// console.log(jsuser)
// // freeze a value in object -->

// Object.freeze(jsuser)
// jsuser.email = "neeraj@google.com"
// console.log(jsuser.email)

console.log(jsuser)
// functions in objects --->

// jsuser.greeting = function(){
//     console.log("hello user")
// }
// console.log(jsuser.greeting())
