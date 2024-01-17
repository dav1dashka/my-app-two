import { Component } from '@angular/core';
import { SaveDataService } from '../save-data.service';
import { FetchCardComponent } from '../fetch-card/fetch-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-show-fetch-cards',
  standalone: true,
  imports: [FetchCardComponent, NgxSkeletonLoaderModule, SkeletonComponent],
  templateUrl: './show-fetch-cards.component.html',
  styleUrl: './show-fetch-cards.component.scss'
})

export class ShowFetchCardsComponent {
  constructor(private SaveDataService: SaveDataService) { }
  datasCards: any = [];
  isRecived: boolean = false;
  cardArray: any = [];
  skeletonNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

