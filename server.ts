const hours = new Date().getHours();
const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';

console.log(greeting);  