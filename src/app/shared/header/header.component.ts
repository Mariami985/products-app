import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

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
