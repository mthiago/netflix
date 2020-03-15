import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';

import { Banner } from './banner.model'

import {NETFLIX_API} from '../../../app.api'

@Injectable()
export class BannerService {

    constructor(private http: Http) {}

    banner(): Observable<Banner[]> {
        return this.http.get(`${NETFLIX_API}/banner`)
            .pipe(map(response => response.json()))
            //.catch(ErrorHandler.handleError)
    }

}