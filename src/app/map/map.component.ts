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
  longitude: number = 0;
  latitude: number = 0;

  private map!: L.Map;

  @Input() messageFromParent: {
    id: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    image: string
  } | undefined;

  @Input() secondMessageFromParent: boolean | undefined;

  id: string = '';
  mapName: string = '';
  isLoaded: boolean = false;

  myIcon = L.icon({
    iconUrl: 'https://freesvg.org/img/map-pin.png',
    iconSize: [38, 40],
    // popupAnchor: [-3, -76],

  });

  initMap(): void {
    console.log(this.longitude)
    console.log(this.latitude)

    this.map = L.map(this.mapName, {
      center: [this.longitude, this.latitude],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 8,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    L.marker([this.longitude, this.latitude] as L.LatLngExpression, {
      icon: this.myIcon,
      title: 'hover text'
    }).addTo(this.map).bindPopup('<h1>aaa</h1> <img style="width:50px" src="https://freesvg.org/img/map-pin.png"/>');

    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    if (this.secondMessageFromParent) {
      this.mapName = 'map' + this.messageFromParent!.id;
      this.longitude = parseFloat(this.messageFromParent!.coordinates.longitude);
      this.latitude = parseFloat(this.messageFromParent!.coordinates.latitude);
    }
  }

  ngAfterViewInit(): void {
    if (this.mapName.length > 4) {
      this.initMap();
    }
  }
}