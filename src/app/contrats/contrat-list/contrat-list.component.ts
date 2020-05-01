import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*importer les component de customer details tout en MAJ*/
import { ContratDetailsComponent } from '../contrat-details/contrat-details.component';
import { ContratService } from 'src/app/service/servicecontrat/contrat.service';

import { Contrat } from '../modelecontrat/contrat';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {
  /*creer un objets de type observable et tableau de la classe client tjr avec une MAJ */
   malistcontrat: Observable<Contrat []>;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private sco: ContratService,  private router: Router) { }

  ngOnInit() {
    this.reloadData();//appel a la fonction de recuperation des données
  }
  /*fonction qui recupere les données */
 reloadData() {
    this.malistcontrat = this.sco.getContrats();
  }
   /*fonction de suppression d'un contrat par id */
   deleteContrat(id: number) {
    this.sco.deleteContrat(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
   /*fonction d'affichage des details d'un contrat par id */

   contratDetails(id: number){
    this.router.navigate(['details-cont', id]);
  }
   contratUpdate(id: number){
    this.router.navigate(['update-cont', id]);
  }
   contratAdd(){this.router.navigate(['add-cont']);}

}
