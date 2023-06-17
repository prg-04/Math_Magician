import calculate from './Calculate';
import operate from './Operate';

// Test case 1: AC button
test('AC button should reset the calculator data', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = 'AC';

  const expected = {
    total: null,
    next: null,
    operation: null,
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});

// Test case 2: Number button
test('Number button should update the calculator data', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = '2';

  const expected = {
    total: '10',
    next: '52',
    operation: '+',
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});

// Test case 3: Decimal button
test('Decimal button should update the calculator data', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = '.';

  const expected = {
    total: '10',
    next: '5.',
    operation: '+',
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});

// Test case 4: Equals button
test('Equals button should perform the operation and return the result', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = '=';

  const expected = {
    total: operate('10', '5', '+'), // Calculate the result using the operate function
    next: null,
    operation: null,
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});

// Test case 5: +/- button
test('+/- button should toggle the sign of the current number', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = '+/-';

  const expected = {
    total: '10',
    next: '-5',
    operation: '+',
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});

// Test case 6: Operation button
test('Operation button should update the calculator data', () => {
  const obj = {
    total: '10',
    next: '5',
    operation: '+',
  };

  const buttonName = '-';

  const expected = {
    total: operate('10', '5', '+'), // Calculate the result using the operate function
    next: null,
    operation: '-',
  };

  const result = calculate(obj, buttonName);

  expect(result).toEqual(expected);
});
