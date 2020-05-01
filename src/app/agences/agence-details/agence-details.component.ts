
import { Component, OnInit } from '@angular/core';
/*importer router avec ActivatedRoute*/
import { Router, ActivatedRoute } from '@angular/router';
import { Agence } from '../modeleagence/agence';
import { AgenceService } from 'src/app/service/serviceagence/agence.service';

@Component({
  selector: 'app-agence-details',
  templateUrl: './agence-details.component.html',
  styleUrls: ['./agence-details.component.css']
})
export class AgenceDetailsComponent implements OnInit {

  id: number;
 monagence: Agence;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router, private ac: AgenceService) { }

  ngOnInit(){
    this.monagence= new Agence();
    this.id = this.route.snapshot.params['id'];
    this.ac.getAgence(this.id)
      .subscribe(data => {
        console.log(data)
        this.monagence = data;
      }, error => console.log(error));
  }
Agence_list(){
    this.router.navigate(['agences']);
  }

}
