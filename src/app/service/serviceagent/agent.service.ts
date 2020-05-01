import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
private baseUrl = 'http://localhost:8282/agt/agents';
/*instancier un objet de type http client dans le constructeur du service */
  constructor(private http: HttpClient) { }

  /*ecrire les fonctions de recuperation correspondante a celles utilisées dans customer.component et ramenées de spring */
getAgent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*tous les clients */
getAgents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
findByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
 


updateCustomer(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}