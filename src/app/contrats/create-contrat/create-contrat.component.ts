import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrat } from '../modelecontrat/contrat';
import { ContratService } from 'src/app/service/servicecontrat/contrat.service';

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

 /*creer un objets de type client tjr avec une MAJ */
   moncontrat: Contrat = new Contrat();
   submitted = false;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sco: ContratService,  private router: Router) { }
 ngOnInit(): void {

  }
/*fonction qui creer un nouveau client */

newContrat(): void {
    this.submitted = false;
    this.moncontrat = new Contrat();
  }
//enregistrer client
save() {
    this.sco.createContrat(this.moncontrat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.moncontrat = new Contrat();
    this.gotoList();
  }
  /*appuyer sur submit pr envoyer le client */
onSubmit() {
    this.submitted = true;
    this.save();
  }
  /*envoyer le client a la liste de clients */
gotoList() {
    this.router.navigate(['contrats']);
  }

}
