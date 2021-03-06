import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongService } from '../../app/services/song.service';
import { PhraseData } from '../../app/models/phrase-data.model'

@Component({
    selector: 'app-hover',
    templateUrl: './hover.component.html',
    styleUrls: ['./hover.component.scss']
})

export class HoverComponent implements OnInit {

    constructor(private songService: SongService) { }

    public hoveredLyrics: Observable<PhraseData>;

    ngOnInit() {
        this.hoveredLyrics = this.songService.getHoveredLyricsObservable();
    }
}