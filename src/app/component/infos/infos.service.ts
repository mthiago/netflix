import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

import { Country } from '../model/country.model'
import { View } from '../model/view.model'
import { Kind } from '../model/Kind.model'

import {NETFLIX_API} from '../../../app.api'

@Injectable()
export class InfosService {

    constructor(private http: Http) {}

    topMovies(): Observable<Country[]> {
        console.log('a')
        return this.http.get(`${NETFLIX_API}/info`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

    topUsers(): Observable<View[]> {
        return this.http.get(`${NETFLIX_API}/info/view`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

    topViews(): Observable<Kind[]> {
        return this.http.get(`${NETFLIX_API}/info/kind`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

}