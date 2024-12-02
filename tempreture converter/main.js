const celsuisInput = document.querySelector('#celsuis');
const FahrenheitInput = document.querySelector('#fahrenheit');

celsuisInput.addEventListener('input', function (e) {
  const celsuis = Number.parseFloat(celsuisInput.value);
  if (!isNaN(celsuis)) {
    const fahrenheit = (celsuis * 9) / 5 + 32;
    FahrenheitInput.value = fahrenheit.toFixed(2);
  } else {
    FahrenheitInput.value = '';
  }
});

FahrenheitInput.addEventListener('input', function (e) {
  const fahrenheit = Number.parseFloat(FahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsuis = ((fahrenheit - 32) * 5) / 9;
    celsuisInput.value = celsuis.toFixed(2);
  } else {
    celsuisInput.value = '';
  }
});
