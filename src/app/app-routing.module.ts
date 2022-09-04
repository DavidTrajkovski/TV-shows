import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent, pathMatch:'full' },
    { path: 'search/:term', component: SearchComponent, pathMatch:'full' },
    { path: 'shows/:showId', component: ShowDetailsComponent, pathMatch:'full' },
    { path: '**', redirectTo: 'search', pathMatch:'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
