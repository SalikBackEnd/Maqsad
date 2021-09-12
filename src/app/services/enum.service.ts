import { Injectable } from '@angular/core';


export enum Plateforms{
  Android="android",
  IOS="ios",
  Capacitor="capacitor",
  Cordova="cordova",
  Hybrid="hybrid",
}

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

}
