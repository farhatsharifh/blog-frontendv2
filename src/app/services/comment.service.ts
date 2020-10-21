import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Comment } from '../comment';
import { BACKEND_URL } from './backendUrl';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentUrl = BACKEND_URL+'comment';

  constructor(
    private http: HttpClient
  ) { }

  createNewComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, comment).pipe(
      /* tap((newComment: Comment) => 
      console.log(`added a new comment at the post with id=${newComment.id}`)), */
      catchError(this.handleError<Comment>('addNewComment'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
