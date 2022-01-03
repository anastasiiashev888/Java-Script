function getPrimes(num) {
  let run = 0;
  for (let i = 2; i <= num; i++) {
    for (let j = 0; j <= i; i++)
      if (i % j !== 0) {
        run = +i;
        console.log(run);
      }
  }
}

getPrimes(100);
