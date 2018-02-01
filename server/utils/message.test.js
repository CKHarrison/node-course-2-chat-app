const expect = require('expect');
const {generateMessage} = require('./message');
const {generateLocationMessage} = require('./message');

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

describe('generate location message', () => {
  it('Should generate correct location object', () => {
    let latitude = 16;
    let longitude = 2;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let from = 'Admin';
    let result = generateLocationMessage(from, latitude, longitude);
    expect(result.from).toBe(from);
    expect(result.createdAt).toBeA('number');
    expect(result.url).toBe(url);
  });
});