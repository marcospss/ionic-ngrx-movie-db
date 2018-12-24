import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController, Events } from 'ionic-angular';
import { Observable } from "rxjs";

@Injectable()
export class InterceptorProvider implements HttpInterceptor {
  constructor(
    private loadingCtrl: LoadingController,
    private events: Events
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {

    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        loading.present();
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.events.publish("unauthorized:requestError");
        } else if (err.status === 408) {
          this.events.publish("timeout:requestError");
        }
      } else if (err.name === "TimeoutError") {
        this.events.publish("timeout:requestError");
      }
    }, () => {
        loading.dismiss();
    });
  }
}
