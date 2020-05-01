import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ContratCustomerListComponent } from './contrat-customer-list/contrat-customer-list.component';
import { CustomerListComponent } from './Clients/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './Clients/customer-details/customer-details.component';
import { CreateCustomerComponent } from './Clients/create-customer/create-customer.component';
import { CustomerUpdateComponent } from './Clients/customer-update/customer-update.component';
import { ContratListComponent } from './contrats/contrat-list/contrat-list.component';
import { ContratDetailsComponent } from './contrats/contrat-details/contrat-details.component';
import { CreateContratComponent } from './contrats/create-contrat/create-contrat.component';
import { ContratUpdateComponent } from './contrats/contrat-update/contrat-update.component';
import { SouscriptionListComponent } from './Souscriptions/souscription-list/souscription-list.component';
import { SouscriptionDetailsComponent } from './Souscriptions/souscription-details/souscription-details.component';
import { CreateSouscriptionComponent } from './Souscriptions/create-souscription/create-souscription.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AgentDetailsComponent } from './agents/agent-details/agent-details.component';
import { AgentSearchComponent } from './agents/agent-search/agent-search.component';
import { AgenceListComponent } from './agences/agence-list/agence-list.component';
import { AgenceDetailsComponent } from './agences/agence-details/agence-details.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
 { path: 'home', component: HomeComponent },

 // { path: '', redirectTo: 'contrat', pathMatch: 'full' },/*A  revoir */
  { path: 'contrats', component: ContratListComponent },
  { path: 'details-cont/:id', component: ContratDetailsComponent },
  { path: 'add-cont', component: CreateContratComponent },
   { path: 'update-cont/:id', component: ContratUpdateComponent },
   //{ path: '', redirectTo: 'customer', pathMatch: 'full' },/*A  revoir */
 { path: 'customers', component: CustomerListComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'add-cust', component: CreateCustomerComponent },
   { path: 'update-cust/:id', component: CustomerUpdateComponent },
     //{ path: '', redirectTo: 'customer', pathMatch: 'full' },/*A  revoir */

      { path: 'souscriptions', component: SouscriptionListComponent },
  { path: 'details-sous/:id', component: SouscriptionDetailsComponent },
  { path: 'add-sous', component: CreateSouscriptionComponent },

      { path: 'agents', component: AgentListComponent },
  { path: 'agents/details-agent/:id', component: AgentDetailsComponent },
  { path: 'search-agent', component: AgentSearchComponent },


   { path: 'agences', component: AgenceListComponent },
  { path: 'agences/details-agence/:id', component: AgenceDetailsComponent },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
