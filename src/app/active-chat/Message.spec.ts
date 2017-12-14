import {Message} from './Message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const message = new Message({
      userMessage: 'hello',
      complete: true
    });
    expect(message.userMessage).toEqual('hello');
    expect(message.complete).toEqual(true);
  });

describe('Message', () => {
  it('should accept values in the constructor', () => {
    const message = new Message({
      userID: 7,
      complete: true
    });
    expect(message.userID).toEqual(7);
    expect(message.complete).toEqual(true);
  });
});



});
