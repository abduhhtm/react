function printEverySecond() {
    let counter = 0;
    let interval = setInterval(() => {
      console.log("Hello World");
      counter++;
      if (counter === 5) {
        clearInterval(interval);
      }
    }, 1000);
  }

  printEverySecond();
  