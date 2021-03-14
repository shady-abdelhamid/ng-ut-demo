import { Injectable } from '@angular/core';
import { AService } from './a.service';
import { BService } from './b.service';

@Injectable({
  providedIn: 'root'
})
export class CService {

  constructor(private bService: BService) { }

  getValue() {
    return this.bService.getValue()
  }
}
