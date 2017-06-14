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

    constructor(private starwarsApiService: StarwarsApiService) { }

    ngOnInit() {
    }

}
