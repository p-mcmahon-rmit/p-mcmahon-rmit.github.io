document.getElementById("checkDateTimeBtn").addEventListener("click", checkDate);

let dateNowResult = document.getElementById("dateNowSpan");
let systemDateResult = document.getElementById("systemDateSpan");
let currentTimezoneResult = document.getElementById("currentTimezoneSpan");
let currentMonthResult = document.getElementById("currentMonthSpan");
let lastClickResult = document.getElementById("lastClickSpan");

let currentDate;

function checkDate(){
  /* before we update need to store previous time */
  let lastClickTime = currentDate;
  currentDate = Date.now();
  let systemDate =  new Date(currentDate);
  let currentTimeZone = systemDate.getTimezoneOffset();
  let currentMonth = systemDate.getMonth();
  dateNowResult.textContent = currentDate;
  systemDateResult.textContent = systemDate;
  currentTimezoneResult.textContent = currentTimeZone;
  currentMonthResult.textContent = currentMonth;
  lastClickResult.textContent = currentDate - lastClickTime;
}

document.getElementById("setDateTimeInput").addEventListener("input", setDate);

let dateSetResult = document.getElementById("dateSetSpan");
let daysDifferenceResult = document.getElementById("daysDifferenceSpan")

function setDate(e){
  let setDate = e.target.value;
  let timeDiff = Date.now() - new Date(setDate);
  let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  dateSetResult.textContent = setDate;
  daysDifferenceResult.textContent = daysDiff;
}