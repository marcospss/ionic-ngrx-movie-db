import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ItemDetailPage } from './item-detail';
import { ComponentsModule } from './../../components/components.module';
import { ItemDetailEffects } from './effects/item-detail.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [
    ItemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailPage),
    ComponentsModule,
    StoreModule.forFeature('itemDetail', reducers),
    EffectsModule.forFeature([ItemDetailEffects])
  ],
})
export class ItemDetailPageModule {}
