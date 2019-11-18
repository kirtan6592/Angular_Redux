import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {
    path: 'redux', component: ReduxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
