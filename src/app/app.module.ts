import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { GenrePPipe } from './pipes/genre-p.pipe';
import { ShowCastComponent } from './show-cast/show-cast.component';
import { ShowEpisodesComponent } from './show-episodes/show-episodes.component';
import { NumberPPipe } from './pipes/number-p.pipe';
import { DatumPPipe } from './pipes/datum-p.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ShowListComponent,
        ShowDetailsComponent,
        ShowCastComponent,
        ShowEpisodesComponent,
        NumberPPipe,
        GenrePPipe,
        DatumPPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
