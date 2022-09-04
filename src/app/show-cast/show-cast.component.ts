import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/models/cast';
import { SearchService } from '../search-service.service';

@Component({
    selector: 'app-show-cast',
    templateUrl: './show-cast.component.html',
    styleUrls: ['./show-cast.component.css']
})
export class ShowCastComponent implements OnInit {

    @Input()
    showId!: number;
    casts: Cast[] | undefined;

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        this.searchService.getCastsByShow(this.showId)
        .subscribe({
            next: (casts) => {
                this.casts = casts;
            },
            error: () => {
                console.log('error message for show-cast');
            }
        });
    }

}
