import { Injectable } from '@angular/core';
import { VirtualStorage } from './virtual-storage.class';
import {AboutCompany} from '../interface/prod-interface';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService extends VirtualStorage<AboutCompany>{

  constructor() {
    super();
    
    this.add({
      id:1,
      title:"About us",
      description:"lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem ipsum lorem ipsum lorem ipsum",
      url:"../../assets/img/people.jpg",
      alt:"A-img1",
    }) 
   }
}