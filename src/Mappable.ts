export interface Mappable {
	icon: string;
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	getContent(): string;
}
