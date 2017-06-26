import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoadingBarService {
    loadingChanged = new Subject<boolean>();
    currentStack = 0;
    // console.log(this.currentStack);

    isLoading() {
        return this.currentStack > 0;
    }

    showLoadingBar() {
        this.currentStack++;
        this.loadingChanged.next(this.isLoading());
    }

    hideLoadingBar() {
        this.currentStack--;
        if (this.currentStack < 0) {
            this.currentStack = 0;
        }
        this.loadingChanged.next(this.isLoading());
    }
}
