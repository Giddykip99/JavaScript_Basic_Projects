
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveawys= document.querySelector('.Giveaway');
const dateLine= document.querySelectorAll('.deadline-format h4');
let dateLinecontainer= document.querySelector('.deadline');

/*----------creating a future date manually the code is commented out------------*/
// const futureDate= new Date(2023,1,27,11,32);

//adding 2 days to the future date so that it doesnt expire
const Today= new Date();
const TodayYear= Today.getFullYear();
const TodaysMoonth= Today.getMonth();
const TodayDate= Today.getDate();

//this is the future date and will always be 2 days ahead of current date
const futureDate= new Date(TodayYear,TodaysMoonth,TodayDate+2,11,30);

//getting all the future properties of time
const futureYear= futureDate.getFullYear();
const futureday= futureDate.getDate();
const futureHour= futureDate.getHours();
const futureMinute= futureDate.getMinutes();

const futureDayofWeek=weekdays[futureDate.getDay()];
const futureMonth= months[futureDate.getMonth()];

//adding the dates to the giveaway class dynamically
giveawys.textContent=`Giveaway Ends On ${futureDayofWeek}, ${futureday} ${futureMonth} ${futureYear} ${futureHour}:${futureMinute}AM`;


function SpecificTimeRemaining(){

//getting the current date
const currentDate=new Date();

//getting the current date in miliseconds and the future date too in miliseconds
const current= currentDate.getTime();
const future= futureDate.getTime();

//getting the time remaining
const TimeRemaining= future-current;
//1s=1000ms
//1min=60sec
//1hr=60min
//1day=24hrs

/*-------------getting the number of miliseconds in 1 day, 1hr etc-----*/
const oneDay= 24*60*60*1000;
const oneHour=60*60*1000;
const oneMinute= 60*1000;
const oneSecond=1*1000;

/*-----------------calculating the remaining time in days,months etc */
const days=Math.floor(TimeRemaining/oneDay);
const hours=Math.floor((TimeRemaining % oneDay)/oneHour);
const minutes=Math.floor((TimeRemaining % oneHour)/oneMinute);
const seconds=Math.floor((TimeRemaining % oneMinute)/oneSecond);
const allValues=[days,hours,minutes,seconds];

//adding zeros to any value that is below 10
function Timeformat(item){
    if(item<10){
        return `0 ${item}`;
    }else{
        return item;
    }
}

/*-----------adding the computed time remaining to our html------- */
dateLine.forEach((datelines,index)=>{
    datelines.textContent=Timeformat(allValues[index]);
//this checks if the date has expired and prints out a message and stops the interval
    if(TimeRemaining < 0){
        clearInterval(timeinterval);
        dateLinecontainer.innerHTML= `<h3 class='expired'>Sorry The offer has expired!</h3>`;
    }
});
}
let timeinterval= setInterval(SpecificTimeRemaining,1000);

SpecificTimeRemaining();


