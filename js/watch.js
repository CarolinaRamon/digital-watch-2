
const showWatch = ()=> {
    let date = new Date();
    let hours = timeFormat(date.getHours());
    let minutes = timeFormat(date.getMinutes());
    let seconds = timeFormat(date.getSeconds());
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[date.getDay()];// The getDay() method returns the day of the week (from 0 to 6) for the specified date. Sunday is 0.
    let day = date.getDate();// The getDate() method returns the day of the month (from 1 to 31) for the specified date.
    let month = months[date.getMonth()];// The getMonth() method returns the month (from 0 to 11) for the specified date. January is 0.
    let year = date.getFullYear();//The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
    let dateText = `${dayName}, ${day} ${month},${year}`;
    document.getElementById('date').innerHTML = dateText;

    document.getElementById('container').classList.toggle('animate'); // Every time the function is called, it toggles between adding or removing this class.
}

const timeFormat = (time)=>{
    if( time < 10 )
        time = '0'+ time;
    return time;
}

setInterval(showWatch, 1000);// Call to function every second.