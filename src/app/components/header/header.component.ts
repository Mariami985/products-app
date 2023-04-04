import { HttpService } from './../../service/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component,  OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(private httpService: HttpService) {
  };

  ngOnInit(): void {
 
  }
  onShopClick(){
    alert('Please, Long In')
  }

}
 
