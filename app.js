import { add } from './calculations.js'
console.log('number added');
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');


console.log(addInput1, addInput2, addButton. addAnswer)

addButton.addEventListener('click', ()=>{
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);
  console.log(result);
  addAnswer.textContent = result;
});

import { subtract } from './calculations.js'
console.log('number added');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');
