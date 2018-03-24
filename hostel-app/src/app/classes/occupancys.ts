import {Clients} from './clients';
import {Nomers} from './nomers';

export class Occupancys{
	id:number;
	client: Clients;
	nomer: Nomers;
	dataOccup:Date;
	dataExpul:Date;
}