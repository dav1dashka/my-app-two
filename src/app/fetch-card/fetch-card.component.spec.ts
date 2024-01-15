import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchCardComponent } from './fetch-card.component';

describe('FetchCardComponent', () => {
  let component: FetchCardComponent;
  let fixture: ComponentFixture<FetchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
