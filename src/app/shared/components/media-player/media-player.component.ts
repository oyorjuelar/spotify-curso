import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultiMediaService } from '@shared/services/multi-media.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})


export class MediaPlayerComponent implements OnInit, OnDestroy{

  mockCover: TrackModel ={
    cover: '',
    album: '',
    name: '',
    _id: 1,
    url: ''
  }

  observers:Array<any> = [];

  constructor(private multiMedia:MultiMediaService){}
  ngOnDestroy(): void {
    console.log("BAAAAM")
    this.observers.forEach((u)=>u.unsubscribe());
  }

  ngOnInit(): void {
    const observer1$ = this.multiMedia.callBack.subscribe(
      (response: TrackModel) =>{
        console.log("recibiendo cancion: ", response);
        this.mockCover = response;
      }
    )

    this.observers = [observer1$];
  }

}
