import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Tecnologia } from "src/app/model/tecnologia";
import { TecnologiaService } from "src/app/service/tecnologia.service";

@Component({
  selector: 'app-edit-hsss',
  templateUrl: './edit-hsss.component.html',
  styleUrls: ['./edit-hsss.component.css']
})
export class EditHsssComponent implements OnInit {
  tecnologia: Tecnologia = new Tecnologia("", "", 0);

  constructor(
    private tecnologiaS: TecnologiaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tecnologiaS.detail(id).subscribe(
      data => {
        this.tecnologia = data;
      }, err => {
        alert("Error al modificar la tecnologia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.tecnologiaS.update(id, this.tecnologia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la tecnologia");
        this.router.navigate(['']);
      }
    )
  }
}
