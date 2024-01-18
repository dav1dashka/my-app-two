import { Component, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() userData!: any;
  data: any = {};

  mapData: {
    id: string;
    name: string,
    coordinates: {
      latitude: string;
      longitude: string;
    };
    image: string;
  } | undefined;

  isSaved: boolean = false;
  isMapVisible = false;

  parentMessage: {
    id: string;
    name: string,
    coordinates: {
      latitude: string;
      longitude: string;
    };
    image: string;
  } | undefined;

  secondParentMessage: boolean = false;

  coordinates: {
    latitude: string
    longitude: string
  } | undefined;

  ngOnInit(): void {
    this.data = this.userData;
    this.mapData = {
      id: this.data.id,
      name: this.data.name.first,
      coordinates: this.data.location.coordinates,
      image: this.data.image
    }
    this.secondParentMessage = true;
    this.parentMessage = this.mapData;
  }

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}
