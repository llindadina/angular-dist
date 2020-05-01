import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
/*importer les component de customer details tout en MAJ*/
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
/*importer le service */
import { CustomerService } from 'src/app/service/serviceclient/customer.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Client } from '../modeleclient/client';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  /*creer un objets de type observable et tableau de la classe client tjr avec une MAJ */
   malistclient: Observable<Client []>;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sc : CustomerService,  private router: Router) { }

  ngOnInit() {
    this.recupData();//appel a la fonction de recuperation des données
  }
  /*fonction qui recupere les données */
 recupData() {
    this.malistclient = this.sc.getCustomers();
  }
   /*fonction de suppression d'un client par id */
   deleteCustomer(id: number) {
    this.sc.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.recupData();
        },
        error => console.log(error));
  }
   /*fonction d'affichage des details d'un client par id */
   customerDetails(id: number){
    this.router.navigate(['details-agent', id]);
  }
customerUpdate(id:number){
  this.router.navigate(['update-cust', id]);
}
customerAdd(){this.router.navigate(['add-cust']);}
}
