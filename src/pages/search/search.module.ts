import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './../../components/components.module';
import { SearchPage } from './search';
import { SearchEffects } from './effects/search.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    ComponentsModule,
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature([SearchEffects])
  ],
})
export class SearchPageModule {}
