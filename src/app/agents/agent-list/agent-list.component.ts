import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
/*imAgentporter les component de customer details tout en MAJ*/
import { AgentDetailsComponent } from '../agent-details/agent-details.component';
/*importer le service */
import { AgentService } from 'src/app/service/serviceagent/agent.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Agent } from '../modeleagent/agent';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  /*creer un objets de type observable et tableau de la classe client tjr avec une MAJ */
   malistagent: Observable<Agent[]>;
   /*instancier un service dans mon component  et une route aussi */
  constructor(private ac : AgentService,  private router: Router) { }

  ngOnInit() {
    this.recupData();//appel a la fonction de recuperation des données
  }
  /*fonction qui recupere les données */
 recupData() {
    this.malistagent = this.ac.getAgents();
  }
   
   /*fonction d'affichage des details d'un client par id */
   agentDetails(id: number){
    this.router.navigate(['agents/details-agent', id]);
  }
searchAgent(){
    this.router.navigate(['search-agent']);
  }

}
