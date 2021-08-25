import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoboardPage } from './todoboard.page';

const routes: Routes = [
  {
    path: '',
    component: TodoboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoboardPageRoutingModule {}
