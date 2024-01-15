import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './show-cards.component.html',
  styleUrl: './show-cards.component.scss'
})
export class ShowCards {
  data: any = [];
 
  ngOnInit(): void {
    this.getData();
    console.log(this.data);
    
  }

  getData() {
    Object.keys(localStorage).forEach(key => {
      this.data.push(localStorage.getItem(key));
    });
  }
}
