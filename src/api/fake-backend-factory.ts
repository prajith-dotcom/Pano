// import { Injectable } from '@angular/core';
// import {
//   HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
//   HttpResponse,
// } from '@angular/common/http';
// import { from, Observable, of } from 'rxjs';
// // import {of} from "rxjs/observable/of";
// import { mergeMap }  from 'rxjs/operators';
// import { tokenBody } from './token';

// @Injectable()
// export class FakeBackendInterceptor implements HttpInterceptor {

//   constructor() { }
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     return of(null).pipe(mergeMap(() => {
//       console.log('=========== FAK url: ' + request.urlWithParams +
//       ' === Mehtod: ' + request.method);
//                 // TOKEN
//       if (request.url.indexOf('/login') >= 0 && request.method === 'POST') {
//         console.log('FAK token');
//         return of(new HttpResponse({
//           status: 200,
//           body: tokenBody,
//         }));
//       }
//       return next.handle(request);

//     }));
//   }
// }

// export let fakeBackendProvider = {
//     // use fake backend in place of Http service for backend-less development
//   provide: HTTP_INTERCEPTORS,
//   useClass: FakeBackendInterceptor,
//   multi: true,
// };
