import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledTabComponent } from './cancelled-tab.component';

describe('CancelledTabComponent', () => {
  let component: CancelledTabComponent;
  let fixture: ComponentFixture<CancelledTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CancelledTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
