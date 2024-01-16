import { Component } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { FetchCardComponent } from '../fetch-card/fetch-card.component';

@Component({
  selector: 'app-show-fetch-cards',
  standalone: true,
  imports: [FetchCardComponent],
  templateUrl: './show-fetch-cards.component.html',
  styleUrl: './show-fetch-cards.component.scss'
})
export class ShowFetchCardsComponent {
  constructor(private SaveDataService: SaveDataService) { }
  datasCards: any = [];
  isRecived: boolean = false;
  cardArray: any = [];
  card: any;
  
  ngOnInit(): void {

    this.SaveDataService.data$.subscribe((data) => {
      if (data) {
        this.datasCards = data;

        for (let index = 0; index < Object.keys(this.datasCards).length; index++) {
          const element = this.datasCards[`user${index}`];
          this.cardArray.push(element);
        }

        this.reloadCards();
      }
    });

  }

  reloadCards() {
    this.isRecived = true;
  }
}

