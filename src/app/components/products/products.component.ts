import { HttpService } from './../../service/http.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

// სერვისს ვიძახებ და find-ით ვპოულობ ლოკაციას

export class ProductsComponent implements OnInit {

  data!: any[];

  items$ = this.httpservice.find({location: 'Guide'});
  
  constructor(private httpservice: HttpService) {}

  ngOnInit():any {
    
  }
  onFilterChanged(filters:any) {
    this.items$ = this.httpservice.find(filters);
  }
}