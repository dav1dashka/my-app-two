import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
data: any = {};

  ngOnInit(): void {
    // this.data = this.userData;

    console.log('12')

    // this.data = JSON.parse(this.userData);
  }
}
