import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StarwarsApiService } from '../../services/starwars-api.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    people = [];

    constructor(private starwarsApiSerivce: StarwarsApiService) { }

    ngOnInit() {
    }

    getPeople() {
        this.starwarsApiSerivce.onGetPeople()
            .subscribe(
                (people: any[]) => {
                    this.people = people;
                    this.starwarsApiSerivce.peopleChanged.next(this.people);
                },
                (error) => console.log(error)
            )
    }

    // getPeople() {
    //     this.starwarsApiSerivce.onGetPeople()
    // }

}
