import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class ContratCustomerService {
  


private baseUrl = 'http://localhost:8081/api/customers';

private customers=[];
constructor(private httpClient: HttpClient) { }


   getCustomersList() {
     this.httpClient.get<any> (this.baseUrl).subscribe(
        (response) => {
          this.customers = response;
          
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  /*getCustomersList(): Observable<ContratCustomer[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
map(response => response._embedded.customersList )
);

  }*/

  
/*
getContratCustomerList(): Observable<ContratCustomer[]> {
return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
map(response => response._embedded.contratCustomerList)
);
}*/
}
