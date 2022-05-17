// ITERATION 1

// const { product } = require('puppeteer');

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const productPrice = product.querySelector('.price span');
  const productQuantity = product.querySelector('.quantity input');
  product.querySelector('.subtotal span').textContent =
    productPrice.textContent * productQuantity.value;
  // console.log(productQuantity.value);
  return productPrice.textContent * productQuantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  const allProduct = document.getElementsByClassName('product');
  console.log(typeof allProduct);
  let sum = 0;
  Array.from(allProduct).forEach((element) => {
    sum += updateSubtotal(element);
  });

  // end of test

  // ITERATION 2

  // ITERATION 3
  const allSubtotal = (document.querySelector('#total-value span').textContent =
    sum);
  console.log(allSubtotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //let allProductParent = document.querySelector('.product').parentElement;
  let allProductChild = document.querySelector('.product').remove();
  //let removeProduct = allProductParent.removeChild(allProductChild);
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;
  console.log(target);
  const createProduct = document.createElement('tr');
  createProduct.textContent = 'Ironhack Rubber Bottle';
  createProduct.classList.add('tr');
  document.body.appendChild(createProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((element) => {
    element.addEventListener('click', removeProduct);
  });
  const createProductBtn = document.getElementById('create');

  createProductBtn.addEventListener('click', createProduct);
});
