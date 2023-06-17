import operate from './Operate';

describe('operate', () => {
  test('performs addition correctly', () => {
    expect(operate('1', '2', '+')).toBe('3');
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('performs subtraction correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
    expect(operate('0.3', '0.1', '-')).toBe('0.2');
  });

  test('performs multiplication correctly', () => {
    expect(operate('2', '3', 'x')).toBe('6');
    expect(operate('0.1', '0.2', 'x')).toBe('0.02');
  });

  test('performs division correctly', () => {
    expect(operate('6', '2', '÷')).toBe('3');
    expect(operate('0.3', '0.1', '÷')).toBe('3');
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('finds modulo correctly', () => {
    expect(operate('10', '3', '%')).toBe('1');
    expect(operate('10', '5', '%')).toBe('0');
    expect(operate('10', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });

  test('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });
});
