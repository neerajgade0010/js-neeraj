// let a = 10;
// const b = 20;
// var c = 30;
// // scope 
// // global scope main jo bhi lihko vo block scope main avalibale hoti h per block scope main likha global scope main avaliable nhi hoti 
// {}

// console.log(a,b,c)

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((myNums) => myNums > 4)
console.log(newNums);
console.log(myNums.filter((num) => {
    return num > 5;
}))
const  names = ["Aai" , "neeraj" , "saee" , "papa" ]
const firstnames = names.filter((name) => {
    return name === "neeraj"
})
console.log(typeof(names[firstnames]))

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbook = books.filter((bk) => bk.genre ==='Fiction')
console.log(userbook)
const titlebta = books.filter((bk) => bk.publish === '1999')
console.log(titlebta)
const nam = books.filter((name) => name === "Book seven")
console.log(nam);
const date = books.filter((bk) => bk.publish > 2000)
console.log(date);

// const date = books.filter((bk) => {
//     let count = 0;
//     if (bk.publish > 2000){
//         count++;
//     }
//     return count
// })
// console.log(date)

const total = books.filter((bk) => bk.publish > 2000).length
console.log(total)