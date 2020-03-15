import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

import { Movie } from './movie.model'

import {NETFLIX_API} from '../../../app.api'

@Injectable()
export class MovieService {

    constructor(private http: Http) {}

    movies(): Observable<Movie[]> {
        return this.http.get(`${NETFLIX_API}/movies`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

}