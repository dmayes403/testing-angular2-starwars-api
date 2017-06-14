import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SinglePersonComponent } from './components/people-list/single-person/single-person.component';

const appRoutes: Routes = [
    { path: 'people', component: PeopleListComponent, children: [
        { path: ':id', component: SinglePersonComponent }
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