let val;

const today = new Date();
let birthday = new Date('9-10-1995 11:25:00');
birthday = new Date('September 10 1995');
birthday = new Date('11/5/1995');

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getTime();
val = today.getHours();

birthday.setMonth(1);
birthday.setDate(13);
birthday.setFullYear(2000);
birthday.setHours(5);

console.log(birthday);