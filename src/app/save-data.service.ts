import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  constructor() { }

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  updateData(data: any) {
    this.dataSubject.next(data);
  }

  private cardDataSubject = new BehaviorSubject<any>(null);
  cardData$ = this.cardDataSubject.asObservable();

  updateCardData(data: any) {
    this.cardDataSubject.next(data);
  }
}
