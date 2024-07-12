import { Subscription } from 'rxjs';
import { TrackService } from '@modules/tracks/services/track.service';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = [];

  constructor(private trackService:TrackService) {}

  orderOption: {
    property: string | null;
    order: string;
  } = {
    property: 'name',
    order: 'asc',
  };

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe(response=>{
      this.tracks = response;
    });
  }

  changeSort(property: string): void {
    const { order } = this.orderOption;
    this.orderOption = {
      property: property,
      order: order == 'asc' ? 'desc' : 'asc',
    };
  }
}
