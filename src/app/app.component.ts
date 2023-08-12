import { Component, Inject, InjectionToken } from '@angular/core';
import {
  BetterLoggerService,
  LoggerService,
  NewLogger,
  OldLogger,
} from './services/logger.service';
import { BaseService } from './services/base.service';
import { DOCUMENT } from '@angular/common';

const ENDPOINT = new InjectionToken<string>('endpoint');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [
    NewLogger,
    {
      provide: OldLogger,
      useExisting: NewLogger,
    },
    {
      provide: ENDPOINT,
      useFactory: () => {
        // LOGIC
        return 'test';
      },
    },
  ],
  // providers: [{ provide: LoggerService, useClass: BetterLoggerService }], // [LoggerService]
})
export class AppComponent {
  /**
   *
   */
  constructor(
    // private logger: LoggerService,
    private $base: BaseService,
    private oldLogger: OldLogger,
    @Inject(ENDPOINT) endpoint: string,
    @Inject(DOCUMENT) private document: Document,
    @Inject(Window) private window: Window
  ) {
    oldLogger.message();
    console.log(endpoint);

    $base.getUser().subscribe();

    this.document.getElementById('user');
    this.window.location;
  }
}
