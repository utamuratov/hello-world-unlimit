import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor() {}

  log(message: string) {
    console.log('Message from log: ' + message);
  }
}

@Injectable()
export class BetterLoggerService extends LoggerService {
  user = 'Falonchi';

  override log(message: string): void {
    console.log(`Message from ${this.user}: ${message}`);
  }
}

@Injectable()
export class OldLogger {
  name = 'old Logger';
  message() {
    console.log('Some log from => ' + this.name);
  }
}

@Injectable()
export class NewLogger {
  name = 'new Logger';
  message() {
    console.log('Some log from => ' + this.name);
    alert('Some log');
  }
}
