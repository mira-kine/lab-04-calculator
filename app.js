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
console.log('number subtracted');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

console.log(subInput1, subInput2, subButton, subAnswer);

subButton.addEventListener('click', ()=>{
  const value1 = Number(subInput1.value);
  const value2 = Number(subInput2.value);
  const result = subtract(value1, value2);
  console.log(result);
  subAnswer.textContent = result;
});

import { multiply } from './calculations.js'
console.log('number multiplied');
const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multAnswer = document.getElementById('mult-answer');

console.log(multInput1, multInput2, multButton, multAnswer);

multButton.addEventListener('click', ()=>{
  const value1 = Number(multInput1.value);
  const value2 = Number(multInput2.value);
  const result = multiply(value1, value2);
  console.log(result);
  multAnswer.textContent = result;
})

import { divide } from './calculations.js'
console.log('number divided');
const diviInput1 = document.getElementById('divi-input-1');
const diviInput2 = document.getElementById('divi-input-2');
const diviButton = document.getElementById('divi-button');
const diviAnswer = document.getElementById('divi-answer');


diviButton.addEventListener('click', ()=>{
  const value1 = Number(diviInput1.value);
  const value2 = Number(diviInput2.value);
  const result = divide(value1, value2);
  console.log(result);
  diviAnswer.textContent = result;
})

import { mod } from './calculations.js'
console.log('number remainder');
const modInput1 = document.getElementById('mod-input-1');
const modInput2 = document.getElementById('mod-input-2');
const modButton = document.getElementById('mod-button');
const modAnswer = document.getElementById('mod-answer');


modButton.addEventListener('click', ()=>{
  const value1 = Number(modInput1.value);
  const value2 = Number(modInput2.value);
  const result = mod(value1, value2);
  console.log(result);
  modAnswer.textContent = result;
});

import { int } from './calculations.js'
console.log('number integer division');
const intInput1 = document.getElementById('int-input-1');
const intInput2 = document.getElementById('int-input-2');
const intButton = document.getElementById('int-button');
const intAnswer = document.getElementById('int-answer');

console.log(intInput1, intInput2, intButton, intAnswer);

intButton.addEventListener('click', ()=> {
  const value1 = Number(intInput1.value);
  const value2 = Number(intInput2.value);
  const result = mod(value1, value2);
  console.log(result);
  intAnswer.textContent = result;
});
