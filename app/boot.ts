import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
//import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
//var appPromise = bootstrap(AppComponent, [ LocalStorageService ]);

// register LocalStorage, this registers our change-detection.
//LocalStorageSubscriber(appPromise);
bootstrap(AppComponent);