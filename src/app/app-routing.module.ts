import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de/edit-acerca-de.component";
import { NewAcercaDeComponent } from "./components/acerca-de/new-acerca-de/new-acerca-de.component";
import { EditeducacionComponent } from "./components/educacion/editeducacion/editeducacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion/neweducacion.component";
import { EditExperienciaComponent } from "./components/experiencia/editexperiencia/editexperiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/newexperiencia/newexperiencia.component";
import { HomeComponent } from "./components/home/home.component";

import { EditHsssComponent } from "./components/hsss/edit-hsss/edit-hsss.component";
import { NewHsssComponent } from "./components/hsss/new-hsss/new-hsss.component";
import { LoginComponent } from "./components/login/login.component";


// import { NuevoLoginComponent } from "./components/nuevo-login/nuevo-login.component";
import { EditProyectosComponent } from "./components/proyectos/edit-proyectos/edit-proyectos.component";
import { NewProyectosComponent } from "./components/proyectos/new-proyectos/new-proyectos.component";


const routes: Routes = [
{path:'', component: HomeComponent},

// {path:'newlogin/', component: NuevoLoginComponent}
{path:'login', component: LoginComponent},


{path:'newexp', component: NewExperienciaComponent},
{path:'editexp/:id', component: EditExperienciaComponent},

{path:'newedu', component: NeweducacionComponent},
{path:'editedu/:id', component: EditeducacionComponent},

{path:'editacerca/:id', component:EditAcercaDeComponent},
{path:'newacerca', component:NewAcercaDeComponent},
{path:'newhss', component: NewHsssComponent},
{path:'edithss/:id', component: EditHsssComponent},

{path:'newpro', component: NewProyectosComponent},
{path:'editpro/:id',component:EditProyectosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
