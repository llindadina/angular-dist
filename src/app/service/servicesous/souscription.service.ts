import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {

 private Url = 'http://localhost:8181/api/souscriptions';
/*instancier un objet de type http client dans le constructeur du service */
constructor(private http: HttpClient) { }

  /*ecrire les fonctions de recuperation correspondante a celles utilisées dans customer.component et ramenées de spring */
getSouscription(id: number): Observable<any> {
    return this.http.get(`${this.Url}/${id}`);
  }


  /*tous les clontrats */
  /*tous les clients */
getSouscriptions(): Observable<any> {
    return this.http.get(`${this.Url}`);
  }

  deleteSouscription(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/${id}`, { responseType: 'text' });
  }
createSouscription(masous: Object): Observable<Object> {
    return this.http.post(`${this.Url}`, masous); }
updateSouscription(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.Url}/${id}`, value);
  }
 
}
