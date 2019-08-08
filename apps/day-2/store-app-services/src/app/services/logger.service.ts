import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(message: any) {
    // server api call
    console.log('LoggerService.log() -', message);
  }
}