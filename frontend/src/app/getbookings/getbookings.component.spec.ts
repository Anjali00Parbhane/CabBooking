import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbookingsComponent } from './getbookings.component';

describe('GetbookingsComponent', () => {
  let component: GetbookingsComponent;
  let fixture: ComponentFixture<GetbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetbookingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
