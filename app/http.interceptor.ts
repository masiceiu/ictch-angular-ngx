import { Injectable, Injector } from '@angular/core';
import { HttpRequest, 
  HttpHandler, 
  HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    switch(req.urlWithParams){
      case"/api/v1/generate_uid":
        console.log('HTTP Request for ' + req.urlWithParams + ' is being responded to locally.');
        return observableOf(new HttpResponse({ body: { "items": ["hi there! I'm in your app intercepting your requests"] }, status: 200 }));
      break;
      default:
        return next.handle(req);
    }
    // Or if you wanted to go to the network:
    // return next.handle(req);
  }
}