import { Component, OnInit } from '@angular/core';

import { LoadingBarService } from '../../services/loading-bar.service';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {
    color = 'primary';
    mode = 'indeterminate';
    loading: boolean;

    constructor(
                private loadingBarService: LoadingBarService
                ) { }

    ngOnInit() {
        this.loading = this.loadingBarService.isLoading();
    }

}
