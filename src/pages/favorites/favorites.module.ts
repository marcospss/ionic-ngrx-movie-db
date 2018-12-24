import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FavoritesPage } from './favorites';
import { ComponentsModule } from './../../components/components.module';
import { FavoritesEffects } from './effects/favorites.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
    ComponentsModule,
    StoreModule.forFeature('favorites', reducers),
    EffectsModule.forFeature([FavoritesEffects])
  ],
})
export class FavoritesPageModule {}
