const p = document.querySelector('p');
const btn = document.querySelector('button');
const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
const apiKey = 'MNemEr9THSVTCxISru9Snw==VJeeHWGzXAbYm3tw';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

async function fetchQuotes() {
  try {
    p.textContent = 'Loading...';
    const res = await fetch(apiUrl, options);
    const data = await res.json();
    p.textContent = data[0].quote;
  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener('click', fetchQuotes);
