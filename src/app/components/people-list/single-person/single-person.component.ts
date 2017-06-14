import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StarwarsApiService } from '../../../services/starwars-api.service';

@Component({
    selector: 'app-single-person',
    templateUrl: './single-person.component.html',
    styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
    singlePerson: any[];
    planets: any[];
    species: any[];

    constructor(private starwarsApiService: StarwarsApiService,
                private route: ActivatedRoute,
                private router: Router) {}

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
    }



    //  onGetSinglePersonPlanets(personIndex) {
    //     return this.http.get(`http://swapi.co/api/planets/${personIndex}/`)
    //         .map(res => res.json())
    //         .flatMap(person => this.http.get(`${person.homeworld}`))
    //         .map(
    //             (response: Response) => {
    //                 const planets = response.json()
    //                 return planets;
    //                 }
    //             )
    //         // .catch(
    //         //     (error: Response) => {
    //         //         return Observable.throw(error);
    //         //     }
    //         // )
    //     }
    // }






}
