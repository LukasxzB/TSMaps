import { faker } from '@faker-js/faker';
import { Mappable } from './Mappable';

export class Company implements Mappable {
	icon: string = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
	name: string;
	catchPhrase: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	getContent(): string {
		return `
			<div>
				<h2>Nome da empresa: ${this.name}</h2>
				<h3>Frase de impacto: ${this.catchPhrase}</h3>
			</div>
		`;
	}
}
