import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsssComponent } from './components/hsss/hsss.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditExperienciaComponent } from './components/experiencia/editexperiencia/editexperiencia.component';
import { NewExperienciaComponent } from './components/experiencia/newexperiencia/newexperiencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { EditHsssComponent } from './components/hsss/edit-hsss/edit-hsss.component';
import { NewHsssComponent } from './components/hsss/new-hsss/new-hsss.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos/edit-proyectos.component';
import { NewAcercaDeComponent } from './components/acerca-de/new-acerca-de/new-acerca-de.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
// import { NuevoLoginComponent } from './components/nuevo-login/nuevo-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HsssComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EducacionComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EditAcercaDeComponent,
    EditHsssComponent,
    NewHsssComponent,
    NewProyectosComponent,
    EditProyectosComponent,
    NewAcercaDeComponent,
    // NuevoLoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
