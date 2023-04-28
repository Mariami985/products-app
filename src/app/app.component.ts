import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-app';
  showHeader=true;
  showFooter= true;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.showHeader = !this.route.firstChild?.snapshot.data['hideHeader'],
      this.showFooter = !this.route.firstChild?.snapshot.data['showFooter'];
    });
  }
}
