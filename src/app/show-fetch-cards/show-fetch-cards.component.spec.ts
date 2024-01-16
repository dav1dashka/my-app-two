import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFetchCardsComponent } from './show-fetch-cards.component';

describe('ShowFetchCardsComponent', () => {
  let component: ShowFetchCardsComponent;
  let fixture: ComponentFixture<ShowFetchCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFetchCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFetchCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
