import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Show } from 'src/models/show';
import { ShowObj } from 'src/models/showObj';
import { Cast } from 'src/models/cast';
import { Episode } from 'src/models/episode';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    apiUrl = 'https://api.tvmaze.com';

    constructor(private http: HttpClient) {}

    getSearchShows(searchText: string | null) : Observable<Show[]> {
        return this.http.get<ShowObj[]>(`${this.apiUrl}/search/shows?q=${searchText}`)
        .pipe(
            map((showsObjs) => showsObjs.map((showObj) => {
                    showObj.show.score = showObj.score;
                    return showObj.show;
                })
            )
        )
    }

    getShow(showId: number): Observable<Show> {
        return this.http.get<Show>(`${this.apiUrl}/shows/${showId}`);
    }

    getCastsByShow(showId: number): Observable<Cast[]> {
        return this.http.get<Cast[]>(`${this.apiUrl}/shows/${showId}/cast`);
    }

    getEpisodesByShow(showId: number): Observable<Episode[]> {
        return this.http.get<Episode[]>(`${this.apiUrl}/shows/${showId}/episodes`);
    }
}

