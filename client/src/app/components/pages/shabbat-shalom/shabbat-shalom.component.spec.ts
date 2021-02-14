import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabbatShalomComponent } from './shabbat-shalom.component';

describe('ShabbatShalomComponent', () => {
  let component: ShabbatShalomComponent;
  let fixture: ComponentFixture<ShabbatShalomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShabbatShalomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabbatShalomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
