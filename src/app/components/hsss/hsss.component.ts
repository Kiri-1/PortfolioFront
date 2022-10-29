import { Component, OnInit } from "@angular/core";
import { Tecnologia } from "src/app/model/tecnologia";
import { TecnologiaService } from "src/app/service/tecnologia.service";
import { TokenService } from "src/app/service/token.service";


@Component({
  selector: 'app-hsss',
  templateUrl: './hsss.component.html',
  styleUrls: ['./hsss.component.css']
})
export class HsssComponent implements OnInit {
  tecnologia: Tecnologia[] = [];
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;

  /**para restringir las cosas que se hacen si no estas logeado */
  constructor(private tecnologiaS: TecnologiaService, private tokenService: TokenService) { }
  
  /** se valida si estamos logeados o no */
  ngOnInit(): void {
    this.cargarTecnologia();
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

  cargarTecnologia(): void{
    this.tecnologiaS.lista().subscribe(data => {this.tecnologia = data;})
  }

  delete(id?: number){
    if( id!= undefined){
      this.tecnologiaS.delete(id).subscribe(
        data => {
          this.cargarTecnologia();
        }, err => {
          alert("No se pudo eliminar la tecnologia");
        }
      )
    }
  }
}