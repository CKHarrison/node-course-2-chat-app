const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate the correct message object', () => {
    let from = 'Chris';
    let text = 'Hello user'
    let result = generateMessage(from, text);
    expect(result.from).toBe(from);
    expect(result.text).toBe(text);
    expect(result.createdAt).toBeA('number');
  });
});