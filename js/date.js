const orderDate = document.querySelector('#form-order-date');

const today = new Date();

const formattedDate =
  today.getDate().toString().padStart(2, '0') +
  '.' +
  (today.getMonth() + 1).toString().padStart(2, '0') +
  '.' +
  today.getFullYear();

orderDate.textContent = `${formattedDate}`;
