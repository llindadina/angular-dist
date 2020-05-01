import { Component, OnInit, Input } from '@angular/core';
/*importer router avec ActivatedRoute*/
import { Router, ActivatedRoute } from '@angular/router';
/*importer le service */
import { CustomerService } from 'src/app/service/serviceclient/customer.service';
/*importer les components de customer list tout en MAJ*/
import { CustomerListComponent } from '../customer-list/customer-list.component';
/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Client } from '../modeleclient/client';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 id: number;
 monclient: Client;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
               private sc: CustomerService) { }

  ngOnInit(){
    this.monclient = new Client();
    this.id = this.route.snapshot.params['id'];
    this.sc.getCustomer(this.id)
      .subscribe(data => {
        console.log(data)
        this.monclient = data;
      }, error => console.log(error));
  }
Client_list(){
    this.router.navigate(['customers']);
  }
}
