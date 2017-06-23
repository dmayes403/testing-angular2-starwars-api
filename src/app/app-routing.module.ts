import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SinglePersonComponent } from './components/people-list/single-person/single-person.component';
import { BootResolver } from './services/boot-resolver.service';

const appRoutes: Routes = [
    { path: 'people', component: PeopleListComponent, children: [
        { path: ':id', component: SinglePersonComponent
        , resolve: { boot: BootResolver }
    }
    ] }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}