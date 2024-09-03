import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCabsComponent } from './get-cabs.component';

describe('GetCabsComponent', () => {
  let component: GetCabsComponent;
  let fixture: ComponentFixture<GetCabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
