const promiseOne = new Promise(function(resolve , reject){
    // asyn works -->
    setTimeout(function(){
        console.log('async task is complete');
        resolve() // okay promies i am done 
        // here the state become full-filled
    }, 1000);
})
// then() tells when the promise finishes successfully run this -->
promiseOne.then(function(){
    console.log("promise consumed")
})
//The promise starts, does some asynchronous work for 1 second, then resolves — and only after that, the .then() function runs.

// 2nd promise -->
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    } , 1000)
}).then(function(){
    console.log("async task 2 is resolved");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("i am alone")
        resolve();
    }, 1000)
}).then(function(){
    console.log("you are going to live alone for a long time")
})

// 3rd promise-->
// direcvtly passing an object in the resolve function
const promsiethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({
            username: "neeraj",
            password: "12345"
        })
    }, 1000)
})
//When resolve() is called, the data you passed (the user object) is automatically received as the argument user in this .then() function.

//So user = { username: "neeraj", password: "12345" }
promsiethree.then(function(user){
    console.log(user.password)
})

// 4th promise --> 
const promiesfour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "neeraj gade",
                password: "21323"
            })
        }else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})
promiesfour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
    return username.password
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})

const promiseFifth = new Promise(function (resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username :"javascrit",
                password: "123224"
            })
        }else{
            reject('ERRO: JS went wrong')
        }
    }, 1000)
});
promiseFifth.then((user)=>{
    console.log(user)
    return user.username
}).then((user)=>{
    console.log(user)
    return user.password
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promsie is either resolved or rejected")
})

// 6th -->

const promisesix = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "neeraj ravindra gade deshmukh",
                password: "1321312"
            })
        }else{
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

async function getpromisesix(){
    try{
        const response = await promisesix;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
getpromisesix()

// kuch nhi hain bus async ka matlab hain ki always promise ayega , hmesha ek promise return krega
// await means wait untill the promise finishes either resolevd or rejected.

// javascript enters the try block first and then wait there untill the promise is over and then once promise is over then it decide to print the try block or jump to the catch block to show the rejection or the error .


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))