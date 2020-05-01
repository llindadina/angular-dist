import { Component, OnInit } from '@angular/core';


import { Observable } from "rxjs";
import { Router } from '@angular/router';
/*importer le service */
import { SouscriptionService } from 'src/app/service/servicesous/souscription.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Souscription } from '../modelesous/souscription';


@Component({
  selector: 'app-create-souscription',
  templateUrl: './create-souscription.component.html',
  styleUrls: ['./create-souscription.component.css']
})
export class CreateSouscriptionComponent implements OnInit {

   /*creer un objets de type client tjr avec une MAJ */
   masouscription: Souscription = new Souscription();
   submitted = false;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sc: SouscriptionService,  private router: Router) { }

  ngOnInit(): void {
  }
/*fonction qui creer un nouveau client */

newSouscription(): void {
    this.submitted = false;
    this.masouscription = new Souscription();
  }
  //enregistrer client
save() {
    this.sc.createSouscription(this.masouscription)
      .subscribe(data => console.log(data), error => console.log(error));
    this.masouscription = new Souscription();
    this.gotoList();
  }
  /*appuyer sur submit pr envoyer le client */
onSubmit() {
    this.submitted = true;
    this.save();
  }
  /*envoyer le client a la liste de clients */
gotoList() {
    this.router.navigate(['/souscriptions']);
  }



}
