import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;
  /**para restringir las cosas que se hacen si no estas logeado */
  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService) { }
  
  /** se valida si estamos logeados o no */
  ngOnInit(): void {
    this.cargarExperiencia();
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

  cargarExperiencia(): void{
    this.experienciaS.lista().subscribe(data => {this.experiencia = data;})
  }

  delete(id?: number){
    if( id!= undefined){
      this.experienciaS.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar la experiencia");
        }
      )
    }
  }
}

