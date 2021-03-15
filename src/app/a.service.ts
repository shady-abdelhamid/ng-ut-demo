import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor() { }

  sum (a, b) {
    if (a > 0) {
      return a + b;
    } else  {
      return a - b;
    }
    
  }
}
