import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HolidaysEffects } from '../store/effects/holiday.effects';
import { holidaysReducer } from '../store/reducers/holiday.reducers';

import { HolidaysPage } from './holidays.page';

describe('HolidaysPage', () => {
  let component: HolidaysPage;
  let fixture: ComponentFixture<HolidaysPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HolidaysPage ],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({  holidays: holidaysReducer }),
        EffectsModule.forRoot([ HolidaysEffects])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
