import { Component, OnInit } from '@angular/core';

import { StarwarsApiService } from '../../services/starwars-api.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    peopleList: any[];

    constructor(private starwarsApiService: StarwarsApiService) { }

    ngOnInit() {
        this.starwarsApiService.peopleChanged
            .subscribe(
                (peopleChange: any[]) => {
                    this.peopleList = peopleChange;
                    console.log(this.peopleList);
                }
            )
    }

}
