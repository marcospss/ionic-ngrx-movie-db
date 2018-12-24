import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Media } from '@models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FavoritesProvider {
  private favorites: Media[] = [];
  constructor(private storage: Storage) {}

  readDB(): Observable<LocalForage> {
    const ready = this.storage.ready();
    return Observable.fromPromise(ready);
  }
  
  getAll(): Observable<Media[]> {
    const getAll = this.storage.forEach((media: Media) => {
      this.favorites.push(media);
    }).then(() => this.favorites);
    return Observable.fromPromise(getAll);
  }

  save(favorite: Media ): Observable<Media> {
    const key = this.generateKey(favorite),
    save = this.storage.set(key, favorite);
    return Observable.fromPromise(save);
  }

  remove(favorite: Media ): Observable<Media>  {
    const key = this.generateKey(favorite),
    remove = this.storage.remove(key).then();
    return Observable.fromPromise(remove);
  }

  inCollection(favorite: Media): Observable<boolean> {
    const key = this.generateKey(favorite),
      isSaved = this.storage.get(key).then(data => data ? true : false);
     return Observable.fromPromise(isSaved);
  }
  private generateKey(key: Media): string {
    const title = ((key.title) ? key.title : key.name).replace(/ /g, '_');
    return `${key.id}_${title}`;
  }

}
