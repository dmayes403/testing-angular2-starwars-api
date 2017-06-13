import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StarwarsApiService {
    peopleChanged = new Subject<any[]>()
    people: any[];

    constructor(private http: Http) { }

    onGetPeople() {
        return this.http.get('http://swapi.co/api/people')
            .map(
                (response: Response) => {
                    const people = response.json().results;
                    return people;
                }
            );
    }

}
