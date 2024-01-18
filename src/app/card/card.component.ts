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
  parentMessage: string = '';

  ngOnInit(): void {
    this.data = this.userData
    // console.log(this.userData)
  }

  isMapVisible = false;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }
}
