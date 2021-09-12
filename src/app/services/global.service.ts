import { Injectable } from '@angular/core';
import { SplashScreenPlugin } from '@capacitor/splash-screen';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    public SplashScreen:SplashScreenPlugin
  ) { 
    SplashScreen.show();
  }

  

}
