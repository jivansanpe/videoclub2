import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pelicula } from '../model/pelicula';



@Injectable({
  providedIn: 'root'
})

export class PeliculaCrudService {

  endpoint = 'http://localhost:8090/videoclub';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createPelicula(pelicula: Pelicula): Observable<any> {
    return this.httpClient.post(this.endpoint, JSON.stringify(pelicula), this.httpOptions)
      .pipe(
        catchError(this.handleError<Pelicula>('Ocurrió un error'))
      );
  }

  getPelicula(id): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Película fetched: ${id}`)),
        catchError(this.handleError<Pelicula[]>(`Get película id=${id}`))
      );
  }

  getPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(this.endpoint)
      .pipe(
        tap(peliculas => console.log('¡Películas encontradas!')),
        catchError(this.handleError<Pelicula[]>('Get película', []))
      );
  }

  updatePelicula(id, pelicula: Pelicula): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(pelicula), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Película actualizada: ${id}`)),
        catchError(this.handleError<Pelicula[]>('Update película'))
      );
  }

  deletePelicula(id): Observable<Pelicula[]> {
    return this.httpClient.delete<Pelicula[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Película deleted: ${id}`)),
        catchError(this.handleError<Pelicula[]>('Delete película'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}