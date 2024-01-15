import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { GetWeatherComponent } from '../get-weather/get-weather.component';

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
    console.log(1)

  }

  fetchData() {
    this.httpClient.get('https://randomuser.me/api/')
      .subscribe((data) => {
        this.userdata = data;
        this.setCardUserData();
      });
  }

  setCardUserData() {
    this.cardUserData =  this.userdata.results;
    console.log(this.cardUserData)
    // this.userdata.results.forEach((element: any, key: number) => {
    //   this.cardUserData[`user${key}`] = {};
    //   this.cardUserData[`user${key}`]['image'] = element.picture.medium;
    //   this.cardUserData[`user${key}`]['name'] = element.name;
    //   this.cardUserData[`user${key}`]['location'] = element.location;
    //   this.cardUserData[`user${key}`]['gender'] = element.gender;
    //   this.cardUserData[`user${key}`]['email'] = element.email;
    // });

    this.isLoaded = true;
  }

  // setCardData(data: any) {

  //   if (this.isSent) {
  //     this.weatherData.forEach((element: any, key: number) => {
  //       this.cardUserData[`user${key}`][`weather`] = {};
  //       this.cardUserData[`user${key}`][`weather`]['image'] = element.image;
  //       this.cardUserData[`user${key}`][`weather`]['description'] = element.description;
  //       this.cardUserData[`user${key}`]['weather']['currentTemp'] = element.currentTemp;
  //       this.cardUserData[`user${key}`]['weather']['lowestTemp'] = element.lowestTemp;
  //       this.cardUserData[`user${key}`]['weather']['higestTemp'] = element.higestTemp;
  //     });
  //   }

  // }
}
