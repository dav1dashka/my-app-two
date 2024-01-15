// import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { GetWeatherComponent } from '../get-weather/get-weather.component';

// @Component({
//   selector: 'app-get-user',
//   standalone: true,
//   imports: [HttpClientModule, GetWeatherComponent],
//   templateUrl: './get-user.component.html',
//   styleUrl: './get-user.component.scss'
// })
// export class GetUserComponent implements OnInit {
//   httpClient = inject(HttpClient);
//   userdata: any = {};
//   weatherData: any = [];
//   isLoaded: boolean = false;
//   isSent: boolean = false;
//   cardUserData: any = {};
//   cardData: any = {};

//   @Output() cardFullData = new EventEmitter<Array<any>>();

//   ngOnInit(): void {
//     this.fetchData();
//   }

//   fetchData() {
//     this.httpClient.get('https://randomuser.me/api/?results=3')
//       .subscribe((data) => {
//         this.userdata = data;
//         this.setCardUserData();
//       });
//   }

//   setCardUserData() {
//     this.userdata.results.forEach((element: any, key: number) => {
//       this.cardUserData[`user${key}`] = {};
//       this.cardUserData[`user${key}`]['image'] = element.picture.medium;
//       this.cardUserData[`user${key}`]['name'] = element.name;
//       this.cardUserData[`user${key}`]['location'] = element.location;
//       this.cardUserData[`user${key}`]['gender'] = element.gender;
//       this.cardUserData[`user${key}`]['email'] = element.email;
//     });

//     this.isLoaded = true;
//   }

//   setCardData(data: any) {
//     this.weatherData.push(data)

//     if (this.isSent) {
//       this.weatherData.forEach((element: any, key: number) => {
//         this.cardUserData[`user${key}`][`weather`] = {};
//         this.cardUserData[`user${key}`][`weather`]['image'] = element.image;
//         this.cardUserData[`user${key}`][`weather`]['description'] = element.description;
//         this.cardUserData[`user${key}`]['weather']['currentTemp'] = element.currentTemp;
//         this.cardUserData[`user${key}`]['weather']['lowestTemp'] = element.lowestTemp;
//         this.cardUserData[`user${key}`]['weather']['higestTemp'] = element.higestTemp;
//       });
//     }

//   }

//   handleIsWeatherSent(data: boolean) {
//     this.isSent = data;
//   }

//   handleCardWeatherData(data: any) {
//     this.setCardData(data);
//     // I got everywhere similar numbers in weather block
//     // I dont know why but i send in this.setCardData() single object which repeats, 
//     // but in console.log(data) i always got different objects with data

//     if (this.isSent) {
//       this.cardFullData.emit(this.cardUserData);
//     }
//   }
// }