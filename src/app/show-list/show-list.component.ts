import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/models/show';

@Component({
    selector: 'app-show-list',
    templateUrl: './show-list.component.html',
    styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

    @Input()
    showsList: Show[] = [];

    constructor() {}

    ngOnInit() {}

}
