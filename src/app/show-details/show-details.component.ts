import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Show } from 'src/models/show';
import { SearchService } from '../search-service.service';

@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.component.html',
    styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

    show: Show | any;
    loading = false;

    constructor(private searchService: SearchService,
                private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap
        .pipe(
            filter((params) => params.has('showId')),
            map((params) => +params.get('showId')!!),
            switchMap((showId) => {
                this.loading = !this.loading;
                return this.searchService.getShow(showId)
            }))
            .subscribe({
            next: (showI) => {
                this.show = showI;
                this.loading = !this.loading;
            },
            error: () => {
                console.log('ERROR in show-details-component.');
            }
        });
    }

}
