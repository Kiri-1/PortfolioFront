import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-new-acerca-de',
  templateUrl: './new-acerca-de.component.html',
  styleUrls: ['./new-acerca-de.component.css']
})
export class NewAcercaDeComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  descripcion: string = '';
  imagen: string = '';
  base="";
  constructor(private personaS: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }
obtener(e:any){this.base=e[0].base64};

  /*crear */
  onCreate(): void {
    this.imagen=this.base;
    const edu = new Persona(this.id, this.nombre, this.apellido, this.descripcion, this.imagen);
    this.personaS.save(edu).subscribe(
      data => {
        alert("Persona añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la persona");
        this.router.navigate(['']);
      }
    )
  }
}
