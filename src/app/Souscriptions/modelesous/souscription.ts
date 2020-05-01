import { Client } from 'src/app/Clients/modeleclient/client';
import { Contrat } from 'src/app/contrats/modelecontrat/contrat';

export class Souscription {
  
		public id: number;
		public beginsouscription: Date;
		public endsouscription: Date;
		public price: number;
		public owner: Client;
		public cont: Contrat;
}
