import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiMediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }
}
