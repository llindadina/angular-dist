import { Component, OnInit, Input  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ContratService } from 'src/app/service/servicecontrat/contrat.service';
/*importer les components de customer list tout en MAJ*/
import { ContratListComponent } from '../contrat-list/contrat-list.component';
import { Contrat } from '../modelecontrat/contrat';
@Component({
  selector: 'app-contrat-details',
  templateUrl: './contrat-details.component.html',
  styleUrls: ['./contrat-details.component.css']
})
export class ContratDetailsComponent implements OnInit {
// tslint:disable-next-line: typedef-whitespace
id : number;
contrat: Contrat;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
              private sco: ContratService ) { }

  ngOnInit() {
    this.contrat = new Contrat();
      this.id = this.route.snapshot.params['id'];
    this.sco.getContrat(this.id)
      .subscribe(dataC => {
        console.log(dataC);
        this.contrat = dataC;
      }, error => console.log(error));

  }
Contrat_list() {
    this.router.navigate(['contrats']);
  }
}
