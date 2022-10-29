import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://belen-jesus-portfolio.herokuapp.com/personas/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `${id}`);
  }

   /**para guardar */
  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', persona);
  }

  public update(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<Persona>(this.URL + `editar/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
}
