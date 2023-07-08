//your JS code here. If required.
const para = document.getElementById("timer");
const currDate = new Date();
const hr = currDate.getHours() > 12 ? currDate.getHours() - 12: currDate.getHours();
const dayNight = currDate.getHours() > 12 ? 'PM': 'AM';
para.innerText = `${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()}, ${hr}:${currDate.getMinutes()}:${currDate.getSeconds()} ${dayNight}`;