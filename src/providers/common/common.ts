import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { Credits, Discover } from '@models';

@Injectable()
export class CommonProvider {

  constructor(private http: HttpClient) {}

  /**
   * Get Credits
   * Get the cast and crew for a movie.
   * Get the credits (cast and crew) that have been added to a TV show.
   * @method getCredits(properties: object)
   * @param properties
   * @returns Returns the cast and crew of a movie or TV show.
   */
  getCredits(properties: object): Observable<Credits[]> {
    const mediaType = properties['mediaType'],
    id = properties['id'];
    return this.http.get<Credits[]>(`${environment.apiEndpoint}/${mediaType}/${id}/credits?api_key=${environment.apikey}&language=${environment.language}`)
  }

  /**
   * Get Recommendations
   * Get a list of recommended movies for a movie or list of TV show recommendations for this item.
   * @param properties 
   */
  getRecommendations(properties: object): Observable<Discover[]> {
    const mediaType = properties['mediaType'],
    id = properties['id'];
    return this.http.get<Discover[]>(`${environment.apiEndpoint}/${mediaType}/${id}/recommendations?api_key=${environment.apikey}&language=${environment.language}`)
  }

  /**
   * Get Similar
   * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param properties 
   */
  getSimilar(properties: object): Observable<Discover[]> {
    const mediaType = properties['mediaType'],
    id = properties['id'];
    return this.http.get<Discover[]>(`${environment.apiEndpoint}/${mediaType}/${id}/similar?api_key=${environment.apikey}&language=${environment.language}`)
  }

}
