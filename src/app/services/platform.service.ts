import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plateforms } from './enum.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private Plateform:Platform
  ) { }

  isAndroid():boolean{
    if(this.Plateform.is(Plateforms.Capacitor)&&this.Plateform.is(Plateforms.Android))
    return true;
    else
    return false;
  }
}
