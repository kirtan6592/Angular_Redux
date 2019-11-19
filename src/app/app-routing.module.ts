import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReduxComponent } from './redux/redux.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'redux', component: ReduxComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'read', component: ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
