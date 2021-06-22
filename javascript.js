function clock(){

  let date = new Date(); //full date time bar second minit
  
  let hr = date.getHours(); //1-23;hr
 
  let minit = date.getMinutes(); //1-59m
 
  let second = date.getSeconds(); //1-59s
  
  
 
  let format = "am"


  if(hr>23){
    hr =12;
  }else if (hr>12){
    hr = hr-12;
  }


  // hr = hr>23? `${hr= "12"}`: `${hr}`;
  // ht = hr>12? `${hr = hr-12}`: '${hr}';

  second = second<10? `0${second}`: `${second}`;
  minit = minit<10? `0${minit}`: `${minit}`;
  hr = hr<10? `0${hr}`: `${hr}`;


 alltime = `${hr} : ${minit} : ${second}   ${format}`;
 document.getElementById('time').innerHTML=alltime;

//  let allTime = `${hr}: ${minit} : ${second}  ${format}`;
//  let h1 = document.getElementById('time').innerHTML=allTime;




setInterval(clock,1000)

}

clock();

















// function clock(){

//   let date = new Date(); //full date time bar second minit
  
//   let hr = date.getHours(); //1-23;hr
 
//   let minit = date.getMinutes(); //1-59m
 
//   let second = date.getSeconds(); //1-59s
 
//   let format = "am"


//  if(hr>23){
//    hr = 12;
//  }else if(hr>12){
//    hr = hr-12;
//    format="pm";

//  }
 
// //  hr = hr<10? `0${hr}`: `${hr}`;
// //  minit = minit<10? `0${minit}`: `${minit}`;
// //  second = second<10? `0${second}`: `${second}`;

//  let allTime = `${hr}: ${minit} : ${second}  ${format}`;
//  let h1 = document.getElementById('time').innerHTML=allTime;

//  setInterval(clock,1000)
// }

// clock();


































// function digitalclock() {

//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   let format = "Am";



  
  
//  if(hours>1 && minutes>0 && seconds>0) {

//    format ="pm"
//    hours= hours-12

//   } else if (hours>=13 ) {
//     hours = hours-12;
//   }



//   let alltimes = `${hours} : ${minutes} : ${seconds} ${format}`;

//   document.getElementsByTagName("h1")[0].innerHTML= alltimes;



//   setInterval(digitalclock,1000);

  

// }


// digitalclock();

































// // function digitalClock() {
// //     let date = new Date();
  
// //     let hours = date.getHours();
// //     let minutes = date.getMinutes();
// //     let seconds = date.getSeconds();
// //     let clockFormat = 'AM';
     

// //     if(hours <= 12 ){
// //       clockFormat = 'am';
// //     }else if (hours>12) {
// //       hours = hours-12;
// //       clockFormat= "pm";
// //     }else{
// //       clockFormat = "pm";
// //     }







// //     // if (hours == 0) {
// //     //   hours = 12;
// //     // } else if (hours > 12) {
// //     //   hours = hours - 12;
// //     //   clockFormat = 'pM';
// //     // }
  
// //     hours = hours < 10 ? '0' + hours : hours;
// //     minutes = minutes < 10 ? '0' + minutes : minutes;
// //     seconds = seconds < 10 ? '0' + seconds : seconds;
  
// //     let finalTime = `${hours}:${minutes}:${seconds} ${clockFormat}`;
// //     document.querySelector('#time').innerText = finalTime;
  
// //     setInterval(digitalClock, 1000);
// //   }
  
// //   digitalClock();