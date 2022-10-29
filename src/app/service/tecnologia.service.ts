import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {
  URL = 'https://belen-jesus-portfolio.herokuapp.com/tecnologia/';


  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tecnologia[]>{
    return this.httpClient.get<Tecnologia[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Tecnologia> {
    return this.httpClient.get<Tecnologia>(this.URL + `detail/${id}`);
  }

   /**para guardar */
  public save(tecnologia: Tecnologia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', tecnologia);
  }

  public update(id: number, tecnologia:Tecnologia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, tecnologia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}