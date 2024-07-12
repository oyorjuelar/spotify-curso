import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, atributo: string | null = null, sort: string = 'asc'): TrackModel[] {

    try {
      if(atributo === null)
        return value;
      else{
        const compare = value.sort((a,b) =>{
          if(a[atributo] < b[atributo])
            return -1;
          else if(a[atributo] === b[atributo])
            return 0;
          else if(a[atributo] < b[atributo])
            return 1;

          return 1;
        });
        console.log((sort))
        console.log((atributo))
        console.log((sort == 'asc'))
        return ((sort === 'asc')?compare:compare.reverse());
      }

    } catch (error) {
      console.log('Algo pasó')
      return value;
    }
  }


}
