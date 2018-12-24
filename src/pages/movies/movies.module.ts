import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './../../components/components.module';
import { MoviesPage } from './movies';
import { MoviesEffects } from './effects/movies.effects';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    MoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
    ComponentsModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([MoviesEffects])
  ],
  exports: [
    MoviesPage
  ]
})
export class MoviesPageModule {}
