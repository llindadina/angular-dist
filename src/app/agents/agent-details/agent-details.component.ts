import { Component, OnInit, Input } from '@angular/core';
/*importer router avec ActivatedRoute*/
import { Router, ActivatedRoute } from '@angular/router';
/*importer le service */
import { AgentService } from 'src/app/service/serviceagent/agent.service';
/*importer les components de customer list tout en MAJ*/
import { AgentListComponent } from '../agent-list/agent-list.component';
/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import {Agent } from '../modeleagent/agent';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})
export class AgentDetailsComponent implements OnInit {

  id: number;
 monagent: Agent;
/*ajouter l'activated route et le router et le service */
  constructor(private route: ActivatedRoute, private router: Router,
               private ac: AgentService) { }

  ngOnInit(){
    this.monagent = new Agent();
    this.id = this.route.snapshot.params['id'];
    this.ac.getAgent(this.id)
      .subscribe(data => {
        console.log(data)
        this.monagent = data;
      }, error => console.log(error));
  }
Agent_list(){
    this.router.navigate(['agents']);
  }

}
