import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferNameService {

  transferName = new Subject<string>();

  constructor() { }

  setName(name: string) {
    this.transferName.next(name);
  }

  observable() {
    return this.transferName.asObservable();
  }

}
