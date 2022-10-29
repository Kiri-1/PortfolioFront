import { Component, OnInit } from "@angular/core";
import { Educacion } from "src/app/model/educacion";
import { EducacionService } from "src/app/service/educacion.service";
import { TokenService } from "src/app/service/token.service";

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
  
    this.educacionS.lista()
    .subscribe(data =>{this.educacion = data;});
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //para que no aparescan los votones como usuario
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarEducacion(): void{
    this.educacionS.lista().subscribe(data => {this.educacion = data;})
  }

 delete(id?: number){
  if( id != undefined){
      this.educacionS.delete(id).subscribe(
       _data => {
          this.cargarEducacion();
        }, _err => {
        alert("No se pudo eliminar la educacion");
       }
      )
    }
  }
}
