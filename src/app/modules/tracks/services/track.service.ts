import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map, mergeMap, of, tap, catchError } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { TracksModule } from '../tracks.module';

@Injectable({
  providedIn: 'root',
})
export class TrackService {

  private readonly URL = environment.api;


  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of([]);

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    console.log('LLAMANDOOO');
    return this.httpClient.get(`${this.URL}/tracks`).pipe(map(({data}:any) => {
      return data;
    }));
  }

  getAllRandom$(): Observable<any> {
    console.log('LLAMANDOOO');
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      mergeMap(({data}:any) => this.skipById(data,1)),
      tap(data => console.log('AQUIII TAAAP',data)),
      catchError(err => {
        return of([])
      })
   )
  }


  private skipById(trackList:TrackModel[], id:number):Promise<TrackModel[]>{
    return new Promise((resolve, reject)=>{
      const listTemp = trackList.filter(track=>track._id!==id);
      resolve(listTemp);
    })
  }
}
