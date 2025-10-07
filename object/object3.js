// destructuring of object -->
const course = {
    coursename : "js in english",
    price : 999,
    courseInstructor : "hitesh",
    ending : "chal by"
}
const {coursename} = course;
const {courseInstructor} = course;
const {price} = course 
// console.log(coursename);
// console.log(course.coursename);
// console.log(course.price);
const {ending} = course;
console.log(ending);

console.log(typeof(price))