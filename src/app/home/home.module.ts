import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from '../store/effects/country.effects';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EffectsModule.forFeature([CountriesEffects])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
