import { AboutServiceService } from './../../../services/about-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent {

  data:any

constructor(service: AboutServiceService){
  this.data = service.find({})
}
}
