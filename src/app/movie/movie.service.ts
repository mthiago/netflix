import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

import { Movie } from './movie.model'

import {NETFLIX_API} from '../../../app.api'

@Injectable()
export class MovieService {

    constructor(private http: Http) {}

    getPopulares(): Observable<Movie[]> {
        return this.http.get(`${NETFLIX_API}/movies-populares`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

    getEmAlta(): Observable<Movie[]> {
        return this.http.get(`${NETFLIX_API}/movies-em-alta`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

}