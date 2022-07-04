const BREAKFAST = "7:00 a.m.";
const LUNCH = "12:00 p.m.";
const DINNER = "19:00 p.m.";

function timeToEat(time) {
  let currentTime = createTime(getHoursMinutes(time));
  let breakfast = createTime(getHoursMinutes(BREAKFAST));
  let lunch = createTime(getHoursMinutes(LUNCH));
  let dinner = createTime(getHoursMinutes(DINNER));
  let nextMeal;

  if (currentTime < breakfast && currentTime < dinner) {
    nextMeal = breakfast;
  } else if (currentTime > dinner) {
    nextMeal = breakfast;
  } else if (currentTime < dinner && currentTime > breakfast) {
    nextMeal = dinner;
  }

  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let nextHours = nextMeal.getHours();
  let nextMinutes = nextMeal.getMinutes();

  if (currentMinutes != 0 && currentHours > nextHours) {
    return [nextHours, 60 - currentMinutes];
  } else if (currentMinutes != 0) {
    return [nextHours - currentHours - 1, 60 - currentMinutes];
  } else {
    return [nextHours - currentHours, 0];
  }
}

function getHoursMinutes(time) {
  let data = time.split(" ");
  let hourAndMinute = data[0].split(":");
  return [hourAndMinute[0], hourAndMinute[1], data[1]];
}

function createTime(time) {
  let date = new Date();
  let hourValue = parseInt(time);
  if (time[2] == "p.m." && hourValue < 12 && hourValue >= 10) {
    date.setHours(hourValue + 12);
  } else {
    date.setHours(time[0]);
  }

  date.setMinutes(time[1]);
  date.setSeconds(0);

  return date;
}

document.addEventListener("DOMContentLoaded", () => {
  timeToEat("2:00 p.m.");
  timeToEat("5:50 a.m.");
  timeToEat("6:37 p.m.");
  timeToEat("12:00 a.m.");
  timeToEat("11:58 p.m.");
  timeToEat("3:33 p.m.");
});
