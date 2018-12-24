import { Component, Input } from '@angular/core';

import { Credits } from '@models';
import { UtilsProvider } from './../../providers';

@Component({
  selector: 'credits',
  templateUrl: 'credits.html'
})
export class CreditsComponent {
  @Input() credits: Credits[];

  constructor(
    public utilsProvider: UtilsProvider
  ) {}

}
