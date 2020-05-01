import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
/*importer les component de customer details tout en MAJ*/
import { SouscriptionDetailsComponent } from '../souscription-details/souscription-details.component';
/*importer le service */
import { SouscriptionService } from 'src/app/service/servicesous/souscription.service'

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Souscription } from '../modelesous/souscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-souscription-list',
  templateUrl: './souscription-list.component.html',
  styleUrls: ['./souscription-list.component.css']
})

export class SouscriptionListComponent implements OnInit {
  /*creer un objets de type observable et tableau de la classe client tjr avec une MAJ */
   malistsous: Observable<Souscription []>;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sousc: SouscriptionService,  private router: Router) { }

  ngOnInit() {
    this.recupData();//appel a la fonction de recuperation des données
  }
  /*fonction qui recupere les données */
 recupData() {
    this.malistsous = this.sousc.getSouscriptions();
  }
   /*fonction de suppression d'un client par id */
   deleteSouscription(id: number) {
    this.sousc.deleteSouscription(id)
      .subscribe(
        data => {
          console.log(data);
          this.recupData();
        },
        error => console.log(error));
  }
   /*fonction d'affichage des details d'une sous par id */
   souscriptionDetails(id: number){
    this.router.navigate(['details-sous', id]);
  }
souscriptionUpdate(id: number){
  this.router.navigate(['update-sous', id]);
}
souscriptionAdd(){
  this.router.navigate(['add-sous']);
}
}