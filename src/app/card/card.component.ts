import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() userData!: any;
  data: any = {};

  ngOnInit(): void {
    this.data = this.userData
  }
}
