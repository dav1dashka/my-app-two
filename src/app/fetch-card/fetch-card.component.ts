import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-fetch-card',
  standalone: true,
  imports: [HttpClientModule, MapComponent],
  templateUrl: './fetch-card.component.html',
  styleUrl: './fetch-card.component.scss'
})
export class FetchCardComponent {
  @Input() userData!: any;

  data: any;
  mapData: {
    id: string;
    name: string,
    coordinates: {
      latitude: string;
      longitude: string;
    };
    image: string;
  } | undefined;

  userName: string = '';
  isSaved: boolean = false;

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

  isMapVisible = false;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

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

  saveCard() {
    this.userName = this.data.name.first;
    localStorage.setItem(`${this.userName}Data`, JSON.stringify(this.data));

    this.isSaved = true;
  }
}
