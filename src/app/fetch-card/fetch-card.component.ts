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
  userName: string = '';
  isSaved: boolean = false;
  parentMessage: number = 0;
  secondParentMessage: boolean = false;

  isMapVisible = false;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

  ngOnInit(): void {
    this.data = this.userData;

    this.secondParentMessage = true;
    this.parentMessage = this.data.id;
    // console.log(this.parentMessage)
  }

  saveCard() {
    this.userName = this.data.name.first;
    localStorage.setItem(`${this.userName}Data`, JSON.stringify(this.data));

    this.isSaved = true;
  }
}
