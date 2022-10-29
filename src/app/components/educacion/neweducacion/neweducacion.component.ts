import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  /*crear */
  onCreate(): void {
    const edu = new Educacion(this.nombreEd, this.descripcionEd);
    this.educacionS.save(edu).subscribe(
      data => {
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
