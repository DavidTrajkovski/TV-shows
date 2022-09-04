import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/models/episode';
import { SearchService } from '../search-service.service';

@Component({
    selector: 'app-show-episodes',
    templateUrl: './show-episodes.component.html',
    styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

    @Input()
    showId!: number;
    episodes: Episode[] | undefined;

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        this.searchService.getEpisodesByShow(this.showId)
        .subscribe({
            next: (episodes) => {
                this.episodes = episodes;
            },
            error: () => {
                console.log('ERROR message for show-episodes-component');
            }
        });
    }

}
