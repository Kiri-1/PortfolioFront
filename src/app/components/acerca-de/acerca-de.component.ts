import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona(0, " ", " ", " ", " ");
  personas: Persona[] = [];
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;

  constructor(public personaService: PersonaService, private activatedRouter: ActivatedRoute, private tokenService: TokenService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.personaService.lista().subscribe(data => {this.personas = data});
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    // this.cargarPersona();
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // } else {
    //   this.isLogged = false;
    // }
    //para que no aparescan los votones como usuario
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    }); /** lo que este en persona se guarda en data*/
  }
  // cargarPersona() {
  //   this.personaService.detail(1).subscribe(data => {
  //     this.persona = data
  //   })
  //}
  cargarPersona(): void{
    this.personaService.lista().subscribe(data => {this.personas = data;})
  }

  delete(id?: number){
    if( id!= undefined){
      this.personaService.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo eliminar la proyecto");
        }
      )
    }
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
  }
}