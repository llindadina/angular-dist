import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
/*imAgentporter les component de customer details tout en MAJ*/
import { AgenceDetailsComponent } from '../agence-details/agence-details.component';
/*importer le service */
import { AgenceService } from 'src/app/service/serviceagence/agence.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Agence } from '../modeleagence/agence';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrls: ['./agence-list.component.css']
})
export class AgenceListComponent implements OnInit {

 /*creer un objets de type observable et tableau de la classe client tjr avec une MAJ */
   malistagence: Observable<Agence[]>;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private ac : AgenceService,  private router: Router) { }

  ngOnInit() {
    this.recupData();//appel a la fonction de recuperation des données
  }
  /*fonction qui recupere les données */
 recupData() {
    this.malistagence = this.ac.getAgences();
  }
   
   /*fonction de suppression d'un agent par id */
   deleteAgence(id: number) {
    this.ac.deleteAgence(id)
      .subscribe(
        data => {
          console.log(data);
          this.recupData();
        },
        error => console.log(error));
  }
   /*fonction d'affichage des details d'un client par id */
   agenceDetails(id: number){
    this.router.navigate(['agences/details-agence', id]);
  }

}
