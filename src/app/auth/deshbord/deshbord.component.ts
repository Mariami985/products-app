import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.scss']
})
export class DeshbordComponent {

  constructor(private serviceLogin: AuthService, private router: Router, private route: ActivatedRoute) {}
}
