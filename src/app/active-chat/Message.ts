export class Message {

  userID: number;
  userMessage: string;
  userMessageID: number;
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
}

}
