import {
    NgModule,
    ModuleWithProviders,
    Optional,
    SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { DiscoverProvider } from './discover/discover';
import { SearchProvider } from './search/search';
import { CommonProvider } from './common/common';
import { FavoritesProvider } from './favorites/favorites';
import { InterceptorProvider } from './interceptor/interceptor';
import { NotificationsProvider} from './notifications/notifications';

import { environment } from './../environments/environment';
import { UtilsProvider } from './utils/utils';

@NgModule({
    imports: [  
        CommonModule,  
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: environment.dbName,
            storeName: environment.storeName,
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    providers: [
        DiscoverProvider,
        SearchProvider,
        CommonProvider,
        FavoritesProvider,
        NotificationsProvider,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorProvider,
            multi: true
        },
        UtilsProvider
    ]
 }) 

 export class CoreProviderModule {  
    static forRoot(): ModuleWithProviders {  
        return {  
            ngModule: CoreProviderModule  
        };  
    }  
 constructor(
     @Optional()
     @SkipSelf()
     parentModule: CoreProviderModule
     ) {  
 if (parentModule) {
     throw new Error('Core Provider Module is already loaded. Import it in the AppModule only');
    }  
   }  
 }