import { Component } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { FetchCardComponent } from '../fetch-card/fetch-card.component';

type Location = {
  street: any;
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: any;
  timezone: any;
};

type Name = {
  title: string;
  first: string;
  last: string;
};

type Weather = {
  image: string;
  description: string;
  currentTemp: number;
  lowestTemp: number;
  higestTemp: number;
  unitTemp: string;
};

type Person = {
  image: string;
  name: Name;
  location: Location;
  gender: string;
  email: string;
  weather: Weather;
};

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

