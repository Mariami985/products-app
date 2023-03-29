import { HttpService } from './../../service/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

// ინფუთი და აუთფუთი მონაცემების მიმმოსაცვლელად
// ფორმგრუპი 
export class HeaderComponent implements OnInit {
  @Input() items:any

  @Output() filterChanged = new EventEmitter<any>();




  productsSearchForms = new FormGroup({
    search: new FormControl(''),
    location: new FormControl('guide'),
  });
  productList: any;

  constructor(private httpservice: HttpService) {
    this.productsSearchForms.valueChanges.subscribe((values) => {
      console.log(values)
      this.filterChanged.emit({
        query: values.search,
        location: values.location,
      });
    });

   }
   productsLocation = ['guide', 'all products', 'fashion', 'electronics', 'jewellery'];

   ngOnInit(){
   }
}
