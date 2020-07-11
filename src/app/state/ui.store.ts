import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export enum CurrencyType{
  USD,
  NIS
}

export interface UiState {
  currencyType: CurrencyType,
  currencyConversion:number
}

export function createInitialState(): UiState {
  return {
    currencyType: CurrencyType.NIS,
    currencyConversion: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UiStore extends Store<UiState> {

  constructor() {
    super(createInitialState());
  }

}
