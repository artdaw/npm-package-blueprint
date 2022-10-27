const greet = require('.');

describe('Greeter Library', () => {
  it('should respond with Hello Gleb', () => {
    expect(greet('Gleb')).toBe('Hello Gleb');
  });
});
