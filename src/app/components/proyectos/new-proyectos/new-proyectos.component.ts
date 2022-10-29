import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imagenP: string = '';
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pro = new Proyecto(this.nombreP, this.descripcionP, this.imagenP);
    this.proyectoS.save(pro).subscribe(
      data =>{
        alert("Proyecto añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
