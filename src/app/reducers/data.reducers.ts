import { Action } from '@ngrx/store';
import { Data } from '../models/Data.model';
import * as DataActions from '../actions/Data.actions';


const initialstate: Data = {
    name: 'Initial',
    url: 'www.google.com'
};

export function dataReducer(state: Data[] = [initialstate], actions: DataActions.Actions) {
    switch (actions.type) {
        case DataActions.ADD_DATA:
            return [...state, actions.payload];
        case DataActions.Remove_DATA:
            state.splice(actions.payloadIndex, 1);
            return state;
        default:
            return state;
    }
}


