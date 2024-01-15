import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCards } from './show-cards.component';

describe('ShowCards', () => {
  let component: ShowCards;
  let fixture: ComponentFixture<ShowCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCards]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
