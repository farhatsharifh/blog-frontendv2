import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Post } from '../post';

 
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'http://localhost:3000/api/posts';  // URL to local host running express API 
  private createPostUrl = 'http://localhost:3000/api/post';
  private postUrl = 'http://localhost:3000/api/post/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.postUrl+`${id}`)
      .pipe(
        catchError(this.handleError<Post>('getSinglePost'))
      );
  }

  createNewPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.createPostUrl, post, this.httpOptions).pipe(
      tap((newPost: Post) => console.log(`added a new post w/ id=${newPost.id}`)),
      catchError(this.handleError<Post>('addNewPost'))
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
