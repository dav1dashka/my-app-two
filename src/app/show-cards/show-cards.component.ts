import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-show-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './show-cards.component.html',
  styleUrl: './show-cards.component.scss'
})
export class ShowCards {
  data: any;
  users: any = [];
  isLoaded: boolean = false;

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    Object.keys(localStorage).forEach(key => {
      let data: any = localStorage.getItem(key);
      this.data = JSON.parse(data)
      this.users.push(this.data);
    });
    // console.log(this.users)
  }
}
