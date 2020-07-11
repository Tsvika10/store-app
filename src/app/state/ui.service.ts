import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, catchError } from 'rxjs/operators';
import { UiStore, UiState } from './ui.store';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UiService {

  constructor(private uiStore: UiStore, private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  updateCurrencyConversion(){
    return this.http.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS').pipe(
      map(v => v['rates']['ILS']),
      tap(v => {
        this.uiStore.update(state => ({...state, currencyConversion:v} as UiState));
      }),
      catchError(err => this.openSnackBar(err)),
      )
  }
  
  openSnackBar(err: any):any {
    this._snackBar.open(`error found: ${err}`,null, {
      duration: 5000,
    });
  }


}
