import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private searchValue = new BehaviorSubject<string>('');

  
  private dropDownValue = new BehaviorSubject<string>('');

  constructor() { }

  setSearchValue(value: any) {
    this.searchValue.next(value);
  }

  getSearchValue() {
    return this.searchValue.asObservable();
  }


  setDropdownValue(value: any) {
    this.dropDownValue.next(value);
  }


  getDropdownValue() {
    return this.dropDownValue.asObservable();
  }


}
