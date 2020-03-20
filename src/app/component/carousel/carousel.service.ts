import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

import { Carousel } from './carousel.model'

import {NETFLIX_API} from '../../../../app.api'

@Injectable()
export class CarouselService {

    constructor(private http: Http) {}

    carousel(): Observable<Carousel[]> {
        return this.http.get(`${NETFLIX_API}/carousel`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

}