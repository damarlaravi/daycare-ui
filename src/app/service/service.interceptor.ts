import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {catchError, finalize, map, Observable, throwError} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  private requestCounter: number = 0;

  constructor(private spinnerService: NgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.beginRequest();
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    const cloneReq: HttpRequest<any> = req.clone({headers});
    return next.handle(cloneReq).pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      }),
      finalize(() => this.endRequest()),
    );
  }

  private beginRequest(): void {
    this.requestCounter = Math.max(this.requestCounter, 0) + 1;
    if (this.requestCounter === 1) {
      this.spinnerService.show().catch((err: any) => err);
    }
  }

  private endRequest(): void {
    this.requestCounter = Math.max(this.requestCounter, 1) - 1;
    if (this.requestCounter === 0) {
      this.spinnerService.hide().catch((err: any) => err);
    }
  }
}
