import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../models/song.model';
import { bindNodeCallback } from 'rxjs/Observable/bindNodeCallback';
import { switchMap } from 'rxjs/operators';
import { parseString } from 'xml2js';



export class SongService{

    private song: Song; //Add interface 
    private songUpdated = new Subject<Song>(); //Add correct interface

    constructor(private http: HttpClient) {}

    createHeaders(headers: HttpHeaders) {
        headers.append('Access-Control-Allow-Origin', '*');
    }
    
    getSong(artist: String, track: String) {
        let headers = new HttpHeaders();
        this.createHeaders(headers);
        this.http
        .get('http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad', {headers: headers})
        .pipe(switchMap(res => bindNodeCallback(parseString)(res)))
        .subscribe((songAsJSON) => {
            console.log(songAsJSON);
        })

    }



    getSongUpdateListener() {
        return this.songUpdated.asObservable();
    }




}