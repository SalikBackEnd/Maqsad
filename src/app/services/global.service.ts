import { Injectable } from '@angular/core';

import { SplashScreen } from '@capacitor/splash-screen';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    
  ) {
   
  }
 
  SplashHide() {
   SplashScreen.hide();
  }


}
