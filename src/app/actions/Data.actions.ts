import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Data } from '../models/Data.model';

export const ADD_DATA = '[DATA] Add';
export const Remove_DATA = '[DATA] Remove';

export class AddData implements Action {
    readonly type = ADD_DATA;

    constructor(public payload: Data) {

    }
}

export class RemoveData implements Action {
    readonly type = Remove_DATA;

    constructor(public payloadIndex: number) {

    }
}

export type Actions = AddData | RemoveData;
