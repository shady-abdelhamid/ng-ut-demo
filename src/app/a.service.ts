import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor() { }

  sum (a, b) {
    return a + b;
  }
}
