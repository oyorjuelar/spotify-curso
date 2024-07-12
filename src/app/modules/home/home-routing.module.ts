import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksPageComponent } from '../tracks/pages/tracks-page/tracks-page.component';
import { FavoritePageComponent } from '../favorites/pages/favorite-page/favorite-page.component';

const routes: Routes = [

  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },

  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },

  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },

  {
    path: '**',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
