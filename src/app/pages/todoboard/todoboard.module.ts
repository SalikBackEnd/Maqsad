import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoboardPageRoutingModule } from './todoboard-routing.module';

import { TodoboardPage } from './todoboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoboardPageRoutingModule
  ],
  declarations: [TodoboardPage]
})
export class TodoboardPageModule {}
