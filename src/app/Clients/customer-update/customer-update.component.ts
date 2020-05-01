import { Component, OnInit, Input } from '@angular/core';

import { Router , ActivatedRoute} from '@angular/router';

/*importer le service */
import { CustomerService } from 'src/app/service/serviceclient/customer.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Client } from '../modeleclient/client';
@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
id: number;
monclient: Client;
submitted = false;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
              private sc: CustomerService) { }


  ngOnInit() {
    this.monclient = new Client();
//this.id=this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params.id;
    this.sc.getCustomer(this.id)
      .subscribe(data => {
        console.log(data);
        this.monclient = data;
      }, error => console.log(error));
  }
   updateCustomer() {
    this.sc.updateCustomer(this.id, this.monclient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.monclient = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.updateCustomer();
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
