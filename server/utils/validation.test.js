const expect = require('expect');
const {isRealString} = require('./validation');

describe('Is real string', () => {
  // isRealString
    // should reject non-string values
    // should reject string with only spaces
    // should allow string with non-space characters
  it('Should reject non string values', () => {
    let result = isRealString(1);
    expect(result).toBe(false);
  });
  it('Should reject strings with only spaces', () => {
    let result = isRealString("     ");
    expect(result).toBe(false);
  });
  it('Should allow strings with non-space characters', () => {
    let goodResult = isRealString("  Chris    ");
    expect(goodResult).toBe(true);
  });
});