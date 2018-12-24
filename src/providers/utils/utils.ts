import { Injectable } from '@angular/core';
import { imagesConfiguration } from './../../environments/image-configuration';

@Injectable()
export class UtilsProvider {

  constructor() {}

  posterImage(poster_path: string, size: string = 'w92'): string {
    const sizeImage = imagesConfiguration.poster_sizes[size];
    if(!poster_path) {
      return 'assets/imgs/image-default.jpg';
    }
    return `${imagesConfiguration.secure_base_url}${sizeImage}${poster_path}`;
  }

  backdropImage(backdrop_path: string, size: string = 'w300'): string {
    const sizeImage = imagesConfiguration.backdrop_sizes[size];
    if(!backdrop_path) {
      return 'assets/imgs/image-default.jpg';
    }
    return `${imagesConfiguration.secure_base_url}${sizeImage}${backdrop_path}`;
  }

  profileImage(profile_sizes: string, size: string = 'w185'): string {
    const sizeImage = imagesConfiguration.profile_sizes[size];
    if(!profile_sizes) {
      return 'assets/imgs/image-default.jpg';
    }
    return `${imagesConfiguration.secure_base_url}${sizeImage}${profile_sizes}`;
  }

}
