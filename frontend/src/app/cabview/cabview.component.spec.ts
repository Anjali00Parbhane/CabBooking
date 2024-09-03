import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabviewComponent } from './cabview.component';

describe('CabviewComponent', () => {
  let component: CabviewComponent;
  let fixture: ComponentFixture<CabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
