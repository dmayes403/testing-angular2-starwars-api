import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StarwarsApiService } from '../../services/starwars-api.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    peopleList: any[];

    constructor(private starwarsApiService: StarwarsApiService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {

        this.starwarsApiService.onGetPeople()
            .subscribe(
                (people: any[]) => {
                    this.peopleList = people;
                    this.starwarsApiService.peopleChanged.next(this.peopleList);
                },
                (error) => console.log(error)
            )

    }

}
