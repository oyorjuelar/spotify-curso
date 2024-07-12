import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultiMediaService } from '@shared/services/multi-media.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  play: boolean = true;

  constructor(private multiMedia: MultiMediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel):void{
    console.log("Enviando cancion al reproductor")
    this.multiMedia.callBack.emit(track);
  }

}
