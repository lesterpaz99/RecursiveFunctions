let secs = 0;
let mins = 0;
let hours = 0;
let time = 0;

const timer = () => {
  if (secs === 60) {
    mins += 1;
    secs = 0;
  }

  if (mins === 60) {
    hours += 1;
    mins = 0;
  }

  console.log(`${hours}:${mins}:${secs}`);
  secs += 1;
  time += 1;
  if (time === (60 * 5)) {
    mins += 10;
    time = 0;
    console.log(`Hour has been updated`);
  }
  setTimeout(timer, 1000);
}

//Call the function here for testing