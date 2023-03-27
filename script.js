//your JS code here. If required.
const promises = [];

for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        reject(`Promise ${i+1} rejected with error`);
      } else {
        resolve(Math.floor(Math.random() * 10) + 1);
      }
    }, Math.random() * 5000); // random delay between 0 and 5 seconds
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((results) => {
    const outputDiv = document.getElementById('output');
    results.forEach((result, i) => {
      const p = document.createElement('p');
      p.innerText = `${i+1}: ${result}`;
      outputDiv.appendChild(p);
    });
  })
  .catch((error) => console.log(error));
