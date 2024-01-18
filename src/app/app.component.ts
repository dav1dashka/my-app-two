import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShowFetchCardsComponent } from './show-fetch-cards/show-fetch-cards.component';
import { MapComponent } from './map/map.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FetchDataComponent,
    ShowFetchCardsComponent,
    MapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
