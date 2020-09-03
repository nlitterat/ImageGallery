import { element } from 'protractor';
import { GalleryElement } from './../gallery/gallery.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  addEvent: Subject<GalleryElement> = new Subject();
  changeEvent: Subject<GalleryElement[]> = new Subject();
  deleteEvent: Subject<GalleryElement> = new Subject();

  elements: GalleryElement[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadElements();
  }

  add(element: GalleryElement) {
    const url = 'http://localhost:8089/elements';
    this.httpClient.post(url, element).subscribe((value: GalleryElement) => {
      this.elements.push(value);
      this.addEvent.next(value);
      this.changeEvent.next(this.elements);
    });
  }
  edit(element: GalleryElement) {
    const url = 'http://localhost:8089/elements';
    this.httpClient.put(url, element).subscribe((value: GalleryElement) => {
      this.loadElements();
    });
  }
  delete(id: number): void {
    const url = 'http://localhost:8089/elements';
    this.httpClient.delete<void>(url, {
      params: {
        id: id.toString()
      }
    }).subscribe ( () => {
      const deletedElement: GalleryElement[] = this.elements.filter(galleryelement => galleryelement.id === id);
      this.deleteEvent.next(deletedElement[0]);
      this.loadElements();
    });
  }

  getElements() {
    return this.elements;
  }

  loadElements() {
    const url = 'http://localhost:8089/elements';
    this.httpClient.get(url).pipe(catchError(this.handleError)).subscribe((values: GalleryElement[]) => {
      this.elements = values;
      this.changeEvent.next(this.elements);
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
