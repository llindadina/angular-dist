import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private baseUrl = 'http://localhost:8181/api/customers';
/*instancier un objet de type http client dans le constructeur du service */
  constructor(private http: HttpClient) { }

  /*ecrire les fonctions de recuperation correspondante a celles utilisées dans customer.component et ramenées de spring */
getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*tous les clients */
getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
createCustomer(monclient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, monclient); }
updateCustomer(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
}
