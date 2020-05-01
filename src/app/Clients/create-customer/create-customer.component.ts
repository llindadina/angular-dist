import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
/*importer le service */
import { CustomerService } from 'src/app/service/serviceclient/customer.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Client } from '../modeleclient/client';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  /*creer un objets de type client tjr avec une MAJ */
   monclient: Client = new Client();
   submitted = false;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sc: CustomerService,  private router: Router) { }

  ngOnInit(): void {
  }
/*fonction qui creer un nouveau client */

newCustomer(): void {
    this.submitted = false;
    this.monclient = new Client();
  }
  //enregistrer client
save() {
    this.sc.createCustomer(this.monclient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.monclient = new Client();
    this.gotoList();
  }
  /*appuyer sur submit pr envoyer le client */
onSubmit() {
    this.submitted = true;
    this.save();
  }
  /*envoyer le client a la liste de clients */
gotoList() {
    this.router.navigate(['/customers']);
  }


}
