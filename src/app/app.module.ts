import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { CustomerListComponent } from './Clients/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './Clients/customer-details/customer-details.component';
import { CreateCustomerComponent } from './Clients/create-customer/create-customer.component';
import { CustomerUpdateComponent } from './Clients/customer-update/customer-update.component';
import { ContratUpdateComponent } from './contrats/contrat-update/contrat-update.component';
import { CreateContratComponent } from './contrats/create-contrat/create-contrat.component';
import { ContratDetailsComponent } from './contrats/contrat-details/contrat-details.component';
import { ContratListComponent } from './contrats/contrat-list/contrat-list.component';
import { CustomerService } from './service/serviceclient/customer.service';
import { ContratService } from './service/servicecontrat/contrat.service';
import { SouscriptionListComponent } from './Souscriptions/souscription-list/souscription-list.component';
import { SouscriptionDetailsComponent } from './Souscriptions/souscription-details/souscription-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateSouscriptionComponent } from './Souscriptions/create-souscription/create-souscription.component';


import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AgentDetailsComponent } from './agents/agent-details/agent-details.component';
import { AgentSearchComponent } from './agents/agent-search/agent-search.component';

import { AgenceDetailsComponent } from './agences/agence-details/agence-details.component';
import { AgenceListComponent } from './agences/agence-list/agence-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
  
 
    CustomerListComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    CustomerUpdateComponent,

    ContratDetailsComponent,
    ContratListComponent, 
    ContratUpdateComponent,
    CreateContratComponent,
    
    SouscriptionListComponent,
    SouscriptionDetailsComponent,
    CreateSouscriptionComponent,
   
    AgentListComponent,
    AgentDetailsComponent,
    AgentSearchComponent,
   
    AgenceDetailsComponent,
    AgenceListComponent,
    HomeComponent,
 
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
 
  ],
  providers: [CustomerService, ContratService],
  bootstrap: [AppComponent]
})
export class AppModule { }
