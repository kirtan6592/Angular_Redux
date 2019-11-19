import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/Data.model';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import * as DataActions from '../actions/Data.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  data: Observable<Data[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.data = this.store.select('data');
  }

  onDelete(index: number) {
    this.store.dispatch(new DataActions.RemoveData(index));
  }

}
