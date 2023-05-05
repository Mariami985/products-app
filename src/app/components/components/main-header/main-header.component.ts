import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

// header dumb component, where is input, output and html.


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  @Input() categoryList: any;
  
  @Input() totalItem: number = 0;

  @Output() searchClick = new EventEmitter()

  constructor(private router: Router,  ){}
  search($event:any){
    this.searchClick.emit($event)
  }

  onClick(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
