import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class StarwarsApiService {
    peopleChanged = new Subject<any[]>()
    people: any[];
    person: any[];
    planets: any[];

    constructor(private http: Http) { }

    onGetPeople(): Observable<any[]> {
        return this.http.get('http://swapi.co/api/people')
            .map(
                (response: Response) => {
                    const people = response.json().results;
                    console.log(people);
                    return people;
                }
            );
    }

    onGetSinglePerson(personIndex) {
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(
                (response: Response) => {
                    const person = response.json();
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
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(res => res.json())
            .flatMap(person => this.http.get(`${person.homeworld}`))
            .map(
                (response: Response) => {
                    const planets = response.json()
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
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(res => res.json())
            .flatMap(person => this.http.get(`${person.species}`))
            .map(
                (response: Response) => {
                    const species = response.json()
                    return species;
                    }
                )
            .catch(
                (error: Response) => {
                    return Observable.throw(error);
                }
            )
        }


    getSinglePersonMovies(personIndex) {
        return this.http.get(`http://swapi.co/api/people/${personIndex}/`)
            .map(
                (response: Response) => {
                    const person = response.json()
                    console.log(person);
                    return person;
                })
        }
}

