import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { Discover } from '@models';

@Injectable()
export class DiscoverProvider {

  constructor(private http: HttpClient) {}

   /**
    * Movie/TV Discover
    * Discover movies by different types of data like average rating, number of votes, genres and certifications. You can get a valid list of certifications from the  method.
    * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
    * @method getDiscover(properties: object)
    * @param { String } mediaType
    * @param { String } sortBy
    * @param { String } year
    * @param { String } genre
    * @param { String } yearFilter
    * @returns Movie List Result Object
   */
    getDiscover(properties: object): Observable<Discover[]> {
      const mediaType = properties['mediaType'],
      sortBy = properties['sortBy'],
      year = properties['year'],
      genre = properties['genre'],
      yearFilter = (mediaType === 'movie') ? 'year' : 'first_air_date_year';

      return this.http.get<Discover[]>(`${environment.apiEndpoint}/discover/${mediaType}?api_key=${environment.apikey}&language=${environment.language}&sort_by=${sortBy}&with_genres=${genre}&${yearFilter}=${year}`);
    }

}
