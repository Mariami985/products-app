import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products-app';

  prodacts!: any[];

  constructor(private productsService: HttpService) { }

  ngOnInit () {
           this.productsService.getProdact().subscribe(response => {
            this.prodacts = response;

                  console.log(response)
           })
  }
}
