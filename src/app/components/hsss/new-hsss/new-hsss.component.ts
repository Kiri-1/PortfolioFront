import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-new-hsss',
  templateUrl: './new-hsss.component.html',
  styleUrls: ['./new-hsss.component.css']
})
export class NewHsssComponent implements OnInit {
  nombreT: string = '';
  descripcionT: string = '';
  porcentajeT: number = 0;

  constructor(private tecnologiaS: TecnologiaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const tec = new Tecnologia(this.nombreT, this.descripcionT, this.porcentajeT);
    this.tecnologiaS.save(tec).subscribe(
      data =>{
        alert("Tecnologia añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la tecnologia");
        this.router.navigate(['']);
      }
    )
  }
}
