import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/Data.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import * as DataActions from '../actions/Data.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addData(name, url) {
    this.store.dispatch(new DataActions.AddData({ name: name, url: url }));
  }

}
