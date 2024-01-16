import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SaveDataService } from '../save-data.service';
import { ShowCards } from '../show-cards/show-cards.component';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [HttpClientModule, ShowCards],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.sass'
})
export class FetchDataComponent {
  constructor(private SaveDataService: SaveDataService) {}


  httpClient = inject(HttpClient);
  userData: any = {};
  weatherData: any = {};
  cardUserData: any = [];
  cardWeatherData: any = [];

  isFetchedUser: boolean = false;
  isFetchedWeather: boolean = false;

  weatherDataCount: number = 0;

  isLoaded: boolean = true;
  cardData: any = {};
  someData: any;

  ngOnInit(): void {
    this.fetchUserData().then(data => {
      this.userData = data;

      this.setUserData();

      this.userData.results.forEach((element: any) => {
        let latitude = element.location.coordinates.latitude;
        let longitude = element.location.coordinates.longitude;

        this.fetchWeatherData(latitude, longitude).then(data => {
          this.weatherData = data;
          this.cardWeatherData.push(this.weatherData);
          this.weatherDataCount++;

          this.weatherDataCount === 3 ? this.setWeatherData(this.cardWeatherData) : null;
        })
      })
    })
  }

  weatherDescriptions: {
    [key: string]: {
      day: {
        description: string;
        image: string;
      };
      night: {
        description: string;
        image: string;
      };
    };
  } = {
      0: {
        day: {
          description: "Sunny",
          image: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        night: {
          description: "Clear",
          image: "http://openweathermap.org/img/wn/01n@2x.png"
        }
      },
      1: {
        day: {
          description: "Mainly Sunny",
          image: "http://openweathermap.org/img/wn/01d@2x.png"
        },
        night: {
          description: "Mainly Clear",
          image: "http://openweathermap.org/img/wn/01n@2x.png"
        }
      },
      2: {
        day: {
          description: "Partly Cloudy",
          image: "http://openweathermap.org/img/wn/02d@2x.png"
        },
        night: {
          description: "Partly Cloudy",
          image: "http://openweathermap.org/img/wn/02n@2x.png"
        }
      },
      3: {
        day: {
          description: "Cloudy",
          image: "http://openweathermap.org/img/wn/03d@2x.png"
        },
        night: {
          description: "Cloudy",
          image: "http://openweathermap.org/img/wn/03n@2x.png"
        }
      },
      45: {
        day: {
          description: "Foggy",
          image: "http://openweathermap.org/img/wn/50d@2x.png"
        },
        night: {
          description: "Foggy",
          image: "http://openweathermap.org/img/wn/50n@2x.png"
        }
      },
      48: {
        day: {
          description: "Rime Fog",
          image: "http://openweathermap.org/img/wn/50d@2x.png"
        },
        night: {
          description: "Rime Fog",
          image: "http://openweathermap.org/img/wn/50n@2x.png"
        }
      },
      51: {
        day: {
          description: "Light Drizzle",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Light Drizzle",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      53: {
        day: {
          description: "Drizzle",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Drizzle",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      55: {
        day: {
          description: "Heavy Drizzle",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Heavy Drizzle",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      56: {
        day: {
          description: "Light Freezing Drizzle",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Light Freezing Drizzle",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      57: {
        day: {
          description: "Freezing Drizzle",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Freezing Drizzle",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      61: {
        day: {
          description: "Light Rain",
          image: "http://openweathermap.org/img/wn/10d@2x.png"
        },
        night: {
          description: "Light Rain",
          image: "http://openweathermap.org/img/wn/10n@2x.png"
        }
      },
      63: {
        day: {
          description: "Rain",
          image: "http://openweathermap.org/img/wn/10d@2x.png"
        },
        night: {
          description: "Rain",
          image: "http://openweathermap.org/img/wn/10n@2x.png"
        }
      },
      65: {
        day: {
          description: "Heavy Rain",
          image: "http://openweathermap.org/img/wn/10d@2x.png"
        },
        night: {
          description: "Heavy Rain",
          image: "http://openweathermap.org/img/wn/10n@2x.png"
        }
      },
      66: {
        day: {
          description: "Light Freezing Rain",
          image: "http://openweathermap.org/img/wn/10d@2x.png"
        },
        night: {
          description: "Light Freezing Rain",
          image: "http://openweathermap.org/img/wn/10n@2x.png"
        }
      },
      67: {
        day: {
          description: "Freezing Rain",
          image: "http://openweathermap.org/img/wn/10d@2x.png"
        },
        night: {
          description: "Freezing Rain",
          image: "http://openweathermap.org/img/wn/10n@2x.png"
        }
      },
      71: {
        day: {
          description: "Light Snow",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Light Snow",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      73: {
        day: {
          description: "Snow",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Snow",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      75: {
        day: {
          description: "Heavy Snow",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Heavy Snow",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      77: {
        day: {
          description: "Snow Grains",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Snow Grains",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      80: {
        day: {
          description: "Light Showers",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Light Showers",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      81: {
        day: {
          description: "Showers",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Showers",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      82: {
        day: {
          description: "Heavy Showers",
          image: "http://openweathermap.org/img/wn/09d@2x.png"
        },
        night: {
          description: "Heavy Showers",
          image: "http://openweathermap.org/img/wn/09n@2x.png"
        }
      },
      85: {
        day: {
          description: "Light Snow Showers",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Light Snow Showers",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      86: {
        day: {
          description: "Snow Showers",
          image: "http://openweathermap.org/img/wn/13d@2x.png"
        },
        night: {
          description: "Snow Showers",
          image: "http://openweathermap.org/img/wn/13n@2x.png"
        }
      },
      95: {
        day: {
          description: "Thunderstorm",
          image: "http://openweathermap.org/img/wn/11d@2x.png"
        },
        night: {
          description: "Thunderstorm",
          image: "http://openweathermap.org/img/wn/11n@2x.png"
        }
      },
      96: {
        day: {
          description: "Light Thunderstorms With Hail",
          image: "http://openweathermap.org/img/wn/11d@2x.png"
        },
        night: {
          description: "Light Thunderstorms With Hail",
          image: "http://openweathermap.org/img/wn/11n@2x.png"
        }
      },
      99: {
        day: {
          description: "Thunderstorm With Hail",
          image: "http://openweathermap.org/img/wn/11d@2x.png"
        },
        night: {
          description: "Thunderstorm With Hail",
          image: "http://openweathermap.org/img/wn/11n@2x.png"
        }
      }
    }

  fetchUserData() {
    return new Promise((resolve, reject) => {
      fetch('https://randomuser.me/api/?results=3')
        .then(response => {
          if (!response.ok) {
            throw new Error(`error status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  fetchWeatherData(latitude: string, longitude: string) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`error status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  setUserData() {
    this.userData.results.forEach((element: any, key: number) => {
      // this.cardUserData.push({[`user${key}`]: {}});
      this.cardUserData[`user${key}`] = {};
      this.cardUserData[`user${key}`]['image'] = element.picture.medium;
      this.cardUserData[`user${key}`]['name'] = element.name;
      this.cardUserData[`user${key}`]['location'] = element.location;
      this.cardUserData[`user${key}`]['gender'] = element.gender;
      this.cardUserData[`user${key}`]['email'] = element.email;
    });
  }

  async setWeatherData(data: any)  {
    await data.forEach((element: any, key: number) => {
      let temperature = element.hourly.temperature_2m;
      let minTemperature = Math.min(...temperature);
      let maxTemperature = Math.max(...temperature);

      let weatherCode = element.current_weather.weathercode;
      let weatherType = this.weatherDescriptions[weatherCode][element.current_weather.is_day === 1 ? 'day' : 'night'];

      this.cardUserData[`user${key}`][`weather`] = {};
      this.cardUserData[`user${key}`][`weather`]['image'] = weatherType.image;
      this.cardUserData[`user${key}`][`weather`]['description'] = weatherType.description;
      this.cardUserData[`user${key}`]['weather']['currentTemp'] = element.current_weather.temperature;
      this.cardUserData[`user${key}`]['weather']['lowestTemp'] = minTemperature;
      this.cardUserData[`user${key}`]['weather']['higestTemp'] = maxTemperature;
      this.cardUserData[`user${key}`]['weather']['unitTemp'] = element.current_weather_units.temperature;
    });
 
    this.isLoaded = true;
    this.someData = this.cardUserData;
    console.log(this.cardUserData)
    this.SaveDataService.updateData(this.cardUserData);
  }


}








// export class GetWeatherComponent implements OnInit {
//   httpClient = inject(HttpClient);
//   data: any = {};
//   weatherData: any = {};
//   temperature: any = [];
//   minTemperature: number = 0;
//   maxTemperature: number = 0;
//   weatherType: any = {};
//   weatherCode: number = 0;
//   isDay: string = '';
//   counter: number = 0;



//   latitude: number = 0;
//   longitude: number = 0;

//   ngOnInit(): void {
//     if (this.IsLoaded) {
//       this.userData.results.forEach((element: any, key: number) => {
//         this.latitude = element.location.coordinates.latitude;
//         this.longitude = element.location.coordinates.longitude;

//         this.fetchData(this.latitude, this.longitude);

//         if (this.counter == key) {
//           this.isWeatherSent.emit(true);
//         }
//       });
//     }
//   }

//   fetchData(latitude: number, longitude: number) {
//     this.httpClient.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weather_code&forecast_days=1`)
//       .subscribe((data) => {
//         this.data = data;

//         this.temperature = this.data.hourly.temperature_2m;
//         this.minTemperature = Math.min(...this.temperature);
//         this.maxTemperature = Math.max(...this.temperature);

//         this.weatherCode = this.data.current_weather.weathercode;
//         this.weatherType = this.weatherDescriptions[this.weatherCode][this.data.current_weather.is_day === 1 ? 'day' : 'night'];

//         this.setCardWeatherData();

//         this.cardWeatherData.emit(this.weatherData);
//       })
//   }

//   setCardWeatherData() {
//     this.weatherData['image'] = this.weatherType.image;
//     this.weatherData['description'] = this.weatherType.description;
//     this.weatherData['currentTemp'] = this.data.current_weather.temperature;
//     this.weatherData['lowestTemp'] = this.minTemperature;
//     this.weatherData['higestTemp'] = this.maxTemperature;
//     this.weatherData['unitTemp'] = this.data.current_weather_units.temperature;
//   }
// }