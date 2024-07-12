import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';
import { ImgBrokenTwoDirective } from './directives/img-broken-two.directive';
import { OrderListPipe } from './pipe/order-list.pipe';

@NgModule({
    declarations: [
        SideBarComponent,
        HeaderUserComponent,
        MediaPlayerComponent,
        CardPlayerComponent,
        SectionGenericComponent,
        PlayListHeaderComponent,
        PlayListBodyComponent,
        ImgBrokenTwoDirective,
        OrderListPipe
    ],
    exports: [
        CommonModule,
        SideBarComponent,
        MediaPlayerComponent,
        HeaderUserComponent,
        CardPlayerComponent,
        SectionGenericComponent,
        PlayListHeaderComponent,
        PlayListBodyComponent,
        OrderListPipe
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
