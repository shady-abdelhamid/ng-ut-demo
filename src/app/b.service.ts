import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BService {

  constructor() { }

  getValue() {
    return 'real value';
  }

  getObservableValue(){
    return of('observable value');
  }

  getPromiseValue() {
    return of('promise value').toPromise();
  }
}
