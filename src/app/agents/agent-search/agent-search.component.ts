import { Component, OnInit, Input } from '@angular/core';
/*importer router avec ActivatedRoute*/
import { Router, ActivatedRoute } from '@angular/router';
import { AgentDetailsComponent } from '../agent-details/agent-details.component';
/*importer le service */
import { AgentService } from 'src/app/service/serviceagent/agent.service';

/*importer la classe correspondante avec la 1 ere lettre en MAJ */
import { Agent } from '../modeleagent/agent';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-agent-search',
  templateUrl: './agent-search.component.html',
  styleUrls: ['./agent-search.component.css']
})
export class AgentSearchComponent implements OnInit {
age: number;
listagent: Agent[];
  constructor(private route: ActivatedRoute, private router: Router,private ac:AgentService) { }

  ngOnInit(){
      
    this.age=0;
  }
private searchAgent() {
    this.listagent = [];
    this.ac.findByAge(this.age)
      .subscribe(listagent => this.listagent = listagent);
  }
  
 
  onSubmit() {
    this.searchAgent();
   
  }
Agent_list(){
   this.router.navigate(['agents']);
}
}
