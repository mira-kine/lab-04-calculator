// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add } from '../calculations.js';
import { subtract_two, subtract } from '../calculations.js';
import { multiply_two, multiply } from '../calculations.js'
import {divide_two, divide} from '../calculations.js'
import { mod_five, mod } from '../calculations.js';
import { int_three, int } from '../calculations.js';

const test = QUnit.test;

test('test add_two function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add (2,3) function', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 5;
    const actual = add(input1, input2);
    expect.equal(actual, expected);
});

test('add(4,5) function', (expect) => {
    const input1 = 4;
    const input2 = 5;
    const expected = 9;
    const actual = add(input1, input2);
    expect.equal(actual, expected);
});

test ('test subtract_two function', (expect) => {
    const expected = 2;
    const actual = subtract_two(4);
    expect.equal(actual, expected);
})

test ('subtract(10,5) function', (expect) => {
    const input1 = 10;
    const input2 = 5;
    const expected = 5;
    const actual = subtract(input1, input2);
    expect.equal(actual,expected);
});

test ('test multiply_two function', (expect) => {
    const expected = 4;
    const actual = multiply_two(2);
    expect.equal(actual, expected);
});

test ('multiply(2,3) function', (expect) => {
    const input1 = 2;
    const input2 = 3;
    const expected = 6;
    const actual = multiply(input1, input2);
    expect.equal(actual, expected);
});

test ('test divide_two function', (expect) => {
    const expected = 4;
    const actual = divide_two(8);
    expect.equal(actual, expected);
});

test ('divide(8,4) function', (expect) => {
    const input1 = 8;
    const input2 = 4;
    const expected = 2;
    const actual = divide(input1, input2);
    expect.equal(actual, expected);
});

test ('test mod_five function', (expect) => {
    const expected = 2;
    const actual = mod_five(12);
    expect.equal(actual, expected);
});

test ('mod(9,3) function', (expect) => {
    const input1 = 9;
    const input2 = 3;
    const expected = 0;
    const actual = mod(input1, input2);
    expect.equal(actual, expected);
});

test ('test int_three function', (expect) => {
    const expected = 5;
    const actual = int_three(17);
    expect.equal(actual, expected);
});

test ('int(12,5) function', (expect) => {
    const input1 = 12;
    const input2 = 5;
    const expected = 2;
    const actual = mod(input1, input2);
    expect.equal(actual, expected);
});