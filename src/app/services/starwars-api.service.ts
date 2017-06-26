import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'

import { LoadingBarService } from './loading-bar.service';

@Injectable()
export class StarwarsApiService {
    peopleChanged = new Subject<any[]>()
    people: any[];
    person: any[];
    planets: any[];

    constructor(
                private http: Http,
                private loadingBarService: LoadingBarService
                ) { }

    onGetPeople(): Observable<any[]> {
        this.loadingBarService.showLoadingBar();
        return this.http.get('http://swapi.co/api/people')
            .map(
                (response: Response) => {
                    const people = response.json().results;
                    console.log(people);
                    this.loadingBarService.hideLoadingBar();
                    return people;
                }
            );
    }

    onGetSinglePerson(personIndex) {
        this.loadingBarService.showLoadingBar();
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(
                (response: Response) => {
                    const person = response.json();
                    this.loadingBarService.hideLoadingBar();
                    return person;
                }
            )
            .catch(
                (error: Response) => {
                    return Observable.throw(error);
                }
            )
    }

    onGetSinglePersonPlanets(personIndex) {
        this.loadingBarService.showLoadingBar();
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(res => res.json())
            .flatMap(person => this.http.get(`${person.homeworld}`))
            .map(
                (response: Response) => {
                    const planets = response.json()
                    this.loadingBarService.hideLoadingBar();
                    return planets;
                    }
                )
            .catch(
                (error: Response) => {
                    return Observable.throw(error);
                }
            )
        }


    onGetSinglePersonSpecies(personIndex) {
        this.loadingBarService.showLoadingBar();
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(res => res.json())
            .flatMap(person => this.http.get(`${person.species}`))
            .map(
                (response: Response) => {
                    const species = response.json()
                    this.loadingBarService.hideLoadingBar();
                    return species;
                    }
                )
            .catch(
                (error: Response) => {
                    return Observable.throw(error);
                }
            )
        }


    onGetSinglePersonMovie(personIndex) {
        this.loadingBarService.showLoadingBar();
        const filmArray = [];
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .flatMap((response: Response) => response.json().films)
            .flatMap((film: string) => {
                return this.http.get(film)
                    .map(
                        (response: Response) => {
                            filmArray.push(response.json());
                            this.loadingBarService.hideLoadingBar();
                            return filmArray;
                        }
                    )
            });
    }
};