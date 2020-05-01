
import { Component, OnInit, Input } from '@angular/core';
/*importer router avec ActivatedRoute*/
import { Router, ActivatedRoute } from '@angular/router';
/*importer le service */
import { SouscriptionService } from 'src/app/service/servicesous/souscription.service';
/*importer les components de customer list tout en MAJ*/
import { SouscriptionListComponent } from '../souscription-list/souscription-list.component';
/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Souscription } from '../modelesous/souscription';

@Component({
  selector: 'app-souscription-details',
  templateUrl: './souscription-details.component.html',
  styleUrls: ['./souscription-details.component.css']
})
export class SouscriptionDetailsComponent implements OnInit {
 idsous: number;
 masous: Souscription;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
               private sousc: SouscriptionService) { }

  ngOnInit(){
    this.masous = new Souscription();
    this.idsous = this.route.snapshot.params['id'];
    this.sousc.getSouscription(this.idsous)
      .subscribe(data => {
        console.log(data)
        this.masous= data;
      }, error => console.log(error));
  }
Souscription_list(){
    this.router.navigate(['souscriptions']);
  }
  

}
