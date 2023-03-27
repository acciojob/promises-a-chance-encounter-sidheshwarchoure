// Function to generate a random number between 1 and 10
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  // Function to create a promise that resolves to a random number or rejects with an error
  function createPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve(getRandomNumber());
        } else {
          reject(new Error('Promise rejected with error'));
        }
      }, 1000);
    });
  }

  // Create an array of 5 promises
  const promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise()
  ];

  // Use Promise.all to wait for all promises to settle and log the results or errors
  Promise.all(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result instanceof Error) {
          console.log(`Promise ${index + 1} rejected with error`);
        } else {
          const outputDiv = document.getElementById('output');
          const p = document.createElement('p');
          p.textContent = `Promise ${index + 1}: ${result}`;
          outputDiv.appendChild(p);
        }
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });