import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { FetchCardComponent } from './fetch-card/fetch-card.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FetchCardComponent,
    GetUserComponent,
    CardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cardData: any = {};
  userName: string = '';
  isSaved: boolean = false;
  userNames: any = {};
  cards: any = [];

  handleCardFullData(data: any) {
    this.cardData = data;
    this.isSaved = true;
    this.cards = [];

    if (this.isSaved) {
      for (let i = 0; i < Object.keys(this.cardData).length; i++) {        
        this.cards.push(this.cardData[`user${i}`]);
        this.userName = this.cardData[`user${i}`].name.first;
      }
    }
  }
}
