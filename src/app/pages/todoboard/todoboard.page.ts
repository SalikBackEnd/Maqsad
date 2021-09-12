import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-todoboard',
  templateUrl: './todoboard.page.html',
  styleUrls: ['./todoboard.page.scss'],
})
export class TodoboardPage implements OnInit {

  constructor(
    private global:GlobalService

  ) {
   
  }
  
  ngOnInit() {
    
  }
  ionViewWillEnter(){
    this.global.SplashHide();
  }
}
