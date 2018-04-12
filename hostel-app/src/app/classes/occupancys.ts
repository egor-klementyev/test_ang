import {Clients} from './clients';
import {Nomers} from './nomers';

export class Occupancys{
	idOccup:number;
	clientID: Clients;
	nomerID: Nomers;
	dateOccup:Date;
	dataExpulsion:Date;
	flgDelete:boolean=false;
}