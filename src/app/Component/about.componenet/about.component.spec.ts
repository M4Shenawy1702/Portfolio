import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenet } from './about.component';

describe('AboutComponenet', () => {
  let component: AboutComponenet;
  let fixture: ComponentFixture<AboutComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
