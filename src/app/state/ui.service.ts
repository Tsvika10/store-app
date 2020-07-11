import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { UiStore, UiState } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UiService {

  constructor(private uiStore: UiStore, private http: HttpClient) {
  }

  updateCurrencyConversion(){
    return this.http.get('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS').pipe(
      map(v => v['rates']['ILS']),
      tap(v => {
        this.uiStore.update(state => ({...state, currencyConversion:v} as UiState));
      }))
  }


}
