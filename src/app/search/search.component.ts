import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Show } from 'src/models/show';
import { SearchService } from '../search-service.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    shows : Show[] = [] ;
    searchText = new FormControl("");
    loading = false;

    constructor(private searchService: SearchService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.search();
    }

    search() {
        this.searchText.valueChanges
        .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value)
        ).subscribe({
            next: (term) => {
                this.searchShows(term)
            },
            error: () => {
                console.log("ERROR in search-component valueChanges");
            }
        });

        this.route.paramMap.pipe(
            map(it => it.get("term") ? it.get("term") : ""),
            switchMap((term) => {
                this.searchText.setValue(term);
                this.loading = !this.loading;
                return this.searchService.getSearchShows(term);
            })
        ).subscribe({
            next: (shows) => {
                this.shows = shows;
                this.loading = !this.loading;
            },
            error: () => {
                console.log("ERROR in search-component route.paramMap");
            }
        });
    }

    searchShows(text: String) {
        this.router.navigate([`/search/${text}`]);
    }
}
