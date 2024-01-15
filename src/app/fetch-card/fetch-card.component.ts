import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { GetUserComponent } from '../get-user/get-user.component';
// import { GetWeatherComponent } from '../get-weather/get-weather.component';

@Component({
  selector: 'app-fetch-card',
  standalone: true,
  // imports: [HttpClientModule, GetUserComponent, GetWeatherComponent],
  templateUrl: './fetch-card.component.html',
  styleUrl: './fetch-card.component.scss'
})
export class FetchCardComponent {
  @Input() userData!: any;
  data: any;
  userName: string = '';
  isSaved: boolean = false;

  ngOnInit(): void  {
    this.data = this.userData;
  }

  saveCard() {
    this.userName = this.data.name.first;
    // localStorage.setItem(`${this.userName}Data`, JSON.stringify(this.data));

    // this.isSaved = true;
  }
}
