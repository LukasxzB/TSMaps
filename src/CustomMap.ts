import { Company } from './Company';
import { Mappable } from './Mappable';

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
			zoom: 4,
			center: {
				lat: -14,
				lng: -53,
			},
		});
	}

	public addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: { lat: mappable.location.lat, lng: mappable.location.lng },
			icon: mappable.icon,
			title: mappable.name,
		});

		const infoWindow = new google.maps.InfoWindow({
			content: mappable.getContent(),
		});

		marker.addListener('click', () => {
			infoWindow.open(this.googleMap, marker);
		});
	}
}
