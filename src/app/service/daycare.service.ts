import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DaycareService {

  constructor(private httpClient: HttpClient) {
  }

  // Error handling
  private static handleError(error: HttpErrorResponse): any {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('errorMessage     ', errorMessage);
    return throwError(() => errorMessage);
  }

  public get(url: string): Observable<any> {
    const endpointURL = environment.remote_url + url;
    return this.httpClient.get<HttpResponse<any>>(endpointURL).pipe(catchError(DaycareService.handleError));
  }

  public post(url: string, data: any): Observable<any> {
    const endpointURL = environment.remote_url + url;
    return this.httpClient.post<HttpResponse<any>>(endpointURL, data).pipe(catchError(DaycareService.handleError));
  }

  public put(url: string, data: any): Observable<any> {
    const endpointURL = environment.remote_url + url;
    return this.httpClient.put<HttpResponse<any>>(endpointURL, data).pipe(catchError(DaycareService.handleError));
  }

  public delete(url: string): Observable<any> {
    const endpointURL = environment.remote_url + url;
    return this.httpClient.delete<HttpResponse<any>>(endpointURL).pipe(catchError(DaycareService.handleError));
  }
}
