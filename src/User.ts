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
			lat: parseFloat(faker.address.latitude(15, -60)),
			lng: parseFloat(faker.address.longitude(-30, -90)),
		};
	}

	getContent(): string {
		return `<h2>Nome do usuário: ${this.name}</h2>`;
	}
}
