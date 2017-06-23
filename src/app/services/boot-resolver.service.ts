import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StarwarsApiService } from './starwars-api.service';

@Injectable()

export class BootResolver implements Resolve<any> {
    constructor(
        private starwarsApiService: StarwarsApiService,
        private routes: ActivatedRoute,
        private router: Router
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
        // console.log(route);
        return Observable.zip(
            this.starwarsApiService.onGetSinglePerson(route.params.id),
            this.starwarsApiService.onGetSinglePersonPlanets(route.params.id),
            this.starwarsApiService.onGetSinglePersonSpecies(route.params.id)
        ).map(() => undefined);
    }
}

