import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  userName: string = '';
  image: string = '';
  longitude: number = 0;
  latitude: number = 0;
  id: string = '';
  mapName: string = '';
  isLoaded: boolean = false;
  private map!: L.Map;

  @Input() messageFromParent: {
    id: string,
    name: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    image: string
  } | undefined;

  @Input() secondMessageFromParent: boolean | undefined;

  myIcon = L.icon({
    iconUrl: 'https://freesvg.org/img/map-pin.png',
    iconSize: [38, 40],
  });

  initMap(): void {
    this.map = L.map(this.mapName, {
      center: [this.latitude, this.longitude],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    L.marker([this.latitude, this.longitude] as L.LatLngExpression, {
      icon: this.myIcon,
      title: 'hover text'
    }).addTo(this.map).bindPopup(`<h1>${this.userName} location</h1><div  style="width: 100%; height 100%"><img style="display: block; width:80px; margin: 0 auto" src="${this.image}"/></div>`);

    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    if (this.secondMessageFromParent) {
      this.mapName = 'map' + this.messageFromParent!.id;
      this.longitude = parseFloat(this.messageFromParent!.coordinates.longitude);
      this.latitude = parseFloat(this.messageFromParent!.coordinates.latitude);
      this.userName = this.messageFromParent!.name;
      this.image = this.messageFromParent!.image;
    }
  }

  ngAfterViewInit(): void {
    if (this.mapName.length > 4) {
      this.initMap();
    }
  }
}