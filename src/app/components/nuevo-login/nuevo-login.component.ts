// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";
// import { NuevoUsuario } from "src/app/model/nuevo-usuario";
// import { AuthService } from "src/app/service/auth.service";
// import { TokenService } from "src/app/service/token.service";

// @Component({
//   selector: 'app-nuevo-login',
//   templateUrl: './nuevo-login.component.html',
//   styleUrls: ['./nuevo-login.component.css']
// })
// export class NuevoLoginComponent implements OnInit {
//   nuevoUsuario1: NuevoUsuario []= [] ;
//   nombre: string = "";
//   nombreUsuario: string = "";
//   email: string = "";
//   password: string = "";
//   errMsj: string = "";
//   isLogged = false;

//   constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

//   ngOnInit() {
//     if (this.tokenService.getToken()) {
//       this.isLogged = true;
//     }
//   }

//   onRegistro(): void {
//     this.nuevoUsuario1 = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
//     this.authService.nuevo(this.nuevoUsuario1).subscribe(
//       data => {
//       });
//     this.router.navigate(['/login']);
//   }

// }
