

let url = 'http://mylogger.io/log';

export class Logger {

  static log(message) {
    // send an http request
    console.log(message);
  }

}
