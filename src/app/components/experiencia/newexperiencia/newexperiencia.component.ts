import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Experiencia } from "src/app/model/experiencia";
import { ExperienciaService } from "src/app/service/experiencia.service";


@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  isLogged = false;
  roles: string[] = [];
  isAdmin = false;

  constructor(private experiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.experiencia.save(exp).subscribe( data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
