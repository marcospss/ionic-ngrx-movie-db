import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { MultiSearch } from '@models';

@Injectable()
export class SearchProvider {

  constructor(private http: HttpClient) {}

  /** 
   * Multi Search
   * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
   * @method getMultiSearch(query: object)
   * @param { String } query
   * @returns  Movies, tv shows and people in a single request.
   */
    getMultiSearch(query: string): Observable<MultiSearch[]> {
      return this.http.get<MultiSearch[]>(`${environment.apiEndpoint}/search/multi?api_key=${environment.apikey}&language=${environment.language}&query=${query}`);
    }

}
