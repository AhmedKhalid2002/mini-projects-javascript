const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) {
    alert('Please inter your task');
    return;
  }
  const itemsList = document.querySelectorAll('.list-container p');
  for (const item of itemsList) {
    if (item.textContent === text) {
      alert('Task already exists');
      return;
    }
  }
  const list = document.createElement('div');
  const p = document.createElement('p');
  const btnDelete = document.createElement('button');
  list.classList.add('list-container');
  list.appendChild(p);
  p.textContent = text;
  list.appendChild(btnDelete);
  btnDelete.textContent = 'Delete';
  btnDelete.classList.add('btn-delete');
  container.appendChild(list);
  btnDelete.addEventListener('click', function (e) {
    e.preventDefault();
    list.remove();
  });
});
