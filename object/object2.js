const tinderuser =  {}
tinderuser.id = "1234"
tinderuser.name = "neeraj"
tinderuser.isloggedIn = false 

const student = {}
student.name = "saee"
student.id = "121"
student.isloggedIn = false

const regularuser = {
    email : "google@google.com",
    fullname: {
        userfullname : {
            firstname : "vivek",
            lastname : "joshi"
        }
    }
}
// console.log(tinderuser.isLoggedin)
// console.log(regularuser.fullname.userfullname.firstname)
const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {
    4 : "a",
    5 : "b"
}

// const objresult = {...obj1 , ...obj2 , ...obj3}
// console.log(obj3)

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "h@gmail.com"
    },
    {
        id : 3,
        email : "h@gmail.com"
    }
]
// console.log(users[0])
console.log(users[1].email)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedIn'))

