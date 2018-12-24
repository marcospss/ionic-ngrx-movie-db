import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './../../components/components.module';
import { TvShowsPage } from './tv-shows';
import { TvShowsEffects } from './effects/tv-shows.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    TvShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(TvShowsPage),
    ComponentsModule,
    StoreModule.forFeature('tvShows', reducers),
    EffectsModule.forFeature([TvShowsEffects])
  ],
})
export class TvShowsPageModule {}
