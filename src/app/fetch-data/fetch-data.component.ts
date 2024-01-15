import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.sass'
})
export class FetchDataComponent {
  httpClient = inject(HttpClient);
  userdata: any = {};
  isLoaded: boolean = false;
  cardUserData: any = {};
  cardData: any = {};

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('https://randomuser.me/api/?results=3')
      .subscribe((data) => {
        this.userdata = data;
        this.setCardUserData();
      });
  }

  setCardUserData() {
    this.cardUserData = this.userdata.results
console.log(this.cardUserData)
    this.isLoaded = true;
  }


  }
