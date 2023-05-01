import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProductsStateService } from './services/products-service/products-state.service';
import { ProductsListService } from './services/products-service/products-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'products-app';


  categoryList$ = this.productStateService.getCategoryValue();
  
  public totalItem: number = 0;


  showHeader=false;
  showFooter= false;

  constructor(private router: Router, 
                    private route: ActivatedRoute,
                    private productStateService:ProductsStateService,
                    private productsListService:ProductsListService) {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.showHeader = !this.route.firstChild?.snapshot.data['hideHeader'],
      this.showFooter = !this.route.firstChild?.snapshot.data['showFooter'];
    });
  }
  ngOnInit(): void {
    this.productsListService.categoryList()
    this.productStateService.getCartItem().subscribe(res => {
        this.totalItem = res.length;
    })
  }
  search($event:any){
    this.productsListService.searchCategory($event.value)
  }
}
