import { HttpService } from './../../service/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

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


data!: any[];


  searchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor(private httpService: HttpService) {
    this.searchForm.valueChanges.pipe(debounceTime(400)).subscribe((values) => {
      console.log(values)

      this. getApi(values.search)
  });

   }

 
  getApi(search?:string | null | undefined){
    this.httpService.getProdact(search).subscribe(
          (data) => {
            this.data = data
          }
    )
  }

   ngOnInit(){
   }
}
