import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  users$ = new BehaviorSubject<any[]>([]);

  constructor() { }

}
