import { faker } from '@faker-js/faker';
import { Mappable } from './Mappable';

export class User implements Mappable {
	icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.findName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	getContent(): string {
		return `<h2>Nome do usuário: ${this.name}</h2>`;
	}
}
