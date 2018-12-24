import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HeaderNavComponent } from './header-nav/header-nav';
import { ListMediaComponent } from './list-media/list-media';
import { OverviewComponent } from './overview/overview';
import { CreditsComponent } from './credits/credits';
import { SuggestionsComponent } from './suggestions/suggestions';
import { FavoritesComponent } from './favorites/favorites';
import { TrackUntrackMediaComponent } from './track-untrack-media/track-untrack-media';

@NgModule({
	declarations: [
		HeaderNavComponent,
		ListMediaComponent,
		OverviewComponent,
		CreditsComponent,
		SuggestionsComponent,
		FavoritesComponent,
		TrackUntrackMediaComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		HeaderNavComponent,
		ListMediaComponent,
		OverviewComponent,
		CreditsComponent,
		SuggestionsComponent,
		FavoritesComponent,
		TrackUntrackMediaComponent
	]
})
export class ComponentsModule {}
