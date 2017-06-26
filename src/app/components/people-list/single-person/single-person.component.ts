import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';

import { StarwarsApiService } from '../../../services/starwars-api.service';
import { LoadingBarService } from '../../../services/loading-bar.service';

import { UpdateUserDialogComponent } from '../../update-user-dialog/update-user-dialog.component';



@Component({
    selector: 'app-single-person',
    templateUrl: './single-person.component.html',
    styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
    color = 'primary';
    mode = 'indeterminate';
    singlePerson: any[];
    planets: any[];
    species: any[];
    loadedCharacter: any;
    films: any[];
    picUrl: string;
    loading: boolean;

    constructor(private starwarsApiService: StarwarsApiService,
                private route: ActivatedRoute,
                private router: Router,
                private http: Http,
                public dialog: MdDialog,
                private loadingBarService: LoadingBarService
) {}

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
                    this.starwarsApiService.onGetSinglePersonMovie(params.id)
                        .subscribe(
                            (films) => { this.films = films },
                            (error) => { console.log(error) }
                        );
                }
            );
    }

    upDatePicDialog() {
        const dialogRef = this.dialog.open(UpdateUserDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.picUrl = result;
      });
    }








}
