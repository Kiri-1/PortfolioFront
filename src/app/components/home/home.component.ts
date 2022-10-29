import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  //constructor(private tokenService: TokenService, private router: Router) { }
 
  
  // islogged = false;
  // islogginFail = false;
  // roles: string[] = [];

  // ngOnInit(): void {
  //   if (this.tokenService.getToken()) {
  //     this.islogged = true;
  //     this.islogginFail = false;
  //     this.roles = this.tokenService.getAuthorities();
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }
}
