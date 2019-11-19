import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';
import { TestComponent } from './test/test.component';
import { ReduxComponent } from './redux/redux.component';
import { StoreModule } from '@ngrx/store';
import { SimpleReducer } from './simple-reducer';
import { dataReducer } from './reducers/data.reducers';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    jqxBarGaugeComponent,
    jqxGridComponent,
    TestComponent,
    ReduxComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    // StoreModule.forRoot({ message: SimpleReducer }),
    StoreModule.forRoot({ data: dataReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ReduxComponent]
})
export class AppModule { }
