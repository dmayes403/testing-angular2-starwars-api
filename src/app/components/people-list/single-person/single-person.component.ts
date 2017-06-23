import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StarwarsApiService } from '../../../services/starwars-api.service';

import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';

@Component({
    selector: 'app-single-person',
    templateUrl: './single-person.component.html',
    styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
    singlePerson: any[];
    planets: any[];
    species: any[];
    loadedCharacter: any;

    constructor(private starwarsApiService: StarwarsApiService,
                private route: ActivatedRoute,
                private router: Router,
                private http: Http) {}

    ngOnInit() {

        this.route.params
            .subscribe(
                (params: Params) => {
                    this.starwarsApiService.onGetSinglePerson(params.id)
                        .subscribe(
                            (person) => {
                            this.singlePerson = person;
                            },
                            (error) => console.log(error)
                        );
                    this.starwarsApiService.onGetSinglePersonPlanets(params.id)
                        .subscribe(
                            (planets) => {
                            this.planets = planets;
                            },
                            (error) => console.log(error)
                        );
                    this.starwarsApiService.onGetSinglePersonSpecies(params.id)
                        .subscribe(
                            (planets) => {
                            this.species = planets;
                            },
                            (error) => console.log(error)
                        );
                }
            );

        // this.starwarsApiService.onGetCirus();

        // const character = this.http.get('https://swapi.co/api/people/1').map(res => res.json());
        // const characterHomeworld = this.http.get('http://swapi.co/api/planets/1').map(res => res.json());

        // Observable.forkJoin([character, characterHomeworld]).subscribe(results => {
        // // results[0] is our character
        // // results[1] is our character homeworld
        // results[0].homeworld = results[1];
        // this.loadedCharacter = results[0];
        // console.log(results[0].homeworld, this.loadedCharacter)
        // });
    }

    onGetSinglePersonMovies() {
        console.log(this.route.snapshot.params)
        this.starwarsApiService.getSinglePersonMovies(this.route.snapshot.params.id).subscribe();
    }








}
