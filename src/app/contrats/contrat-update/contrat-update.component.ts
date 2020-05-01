import { Component, OnInit, Input } from '@angular/core';
import { Contrat } from '../modelecontrat/contrat';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratService } from 'src/app/service/servicecontrat/contrat.service';

@Component({
  selector: 'app-contrat-update',
  templateUrl: './contrat-update.component.html',
  styleUrls: ['./contrat-update.component.css']
})
export class ContratUpdateComponent implements OnInit {

// tslint:disable-next-line: typedef-whitespace
id : number;
contrat: Contrat;
submitted = false;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
    // tslint:disable-next-line: align
    private sco: ContratService) { }

  ngOnInit(){
    this.contrat = new Contrat();
    this.id = this.route.snapshot.params['id'];
    this.sco.getContrat(this.id)
      .subscribe(data => {
        console.log(data)
        this.contrat = data;
      }, error => console.log(error));
  }
   updateContrat() {
    this.sco.updateContrat(this.id, this.contrat)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contrat = new Contrat();
    this.gotoList();
  }

  onSubmit() {
    this.updateContrat();
  }

  gotoList() {
    this.router.navigate(['/contrats']);
  }

}
