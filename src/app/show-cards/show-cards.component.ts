import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-show-cards',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './show-cards.component.html',
  styleUrl: './show-cards.component.scss'
})
export class ShowCards {
  data: any = [];

  @Input() someData: any;
  @Input() isLoaded: any;


  ngOnInit(): void {
    if (this.isLoaded) {
      console.log(this.someData);
      console.log(4444);

    }
    // this.getData();

    console.log(this.isLoaded);


  }


  // getData() {
  //   Object.keys(localStorage).forEach(key => {
  //     this.data.push(localStorage.getItem(key));
  //   });
  // }
}
