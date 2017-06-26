import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { MdDialog, MdDialogRef } from '@angular/material';

import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';

import { StarwarsApiService } from '../../services/starwars-api.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    people = [];
    picUrl: string;

    constructor(
                private starwarsApiService: StarwarsApiService,
                public dialog: MdDialog
                ) { }

    ngOnInit() {
    }

}
