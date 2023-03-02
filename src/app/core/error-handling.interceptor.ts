import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpUserEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { MessageService } from "./message.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          this.messageService.error(`Błąd połączenia: ${err.message}`);
        }
        return err;
      })
    ) as Observable<HttpEvent<any>>;
  }
}
