import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
private baseUrl = 'http://localhost:8383/agc/agences';
/*instancier un objet de type http client dans le constructeur du service */
  constructor(private http: HttpClient) { }

  /*ecrire les fonctions de recuperation correspondante a celles utilisées dans customer.component et ramenées de spring */
getAgence(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*tous les clients */
getAgences(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  /*supp agence par id */
  deleteAgence(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}