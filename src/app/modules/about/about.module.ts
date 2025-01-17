import {NgModule} from '@angular/core'
import {AboutRoutingModule} from './about-routing.module'
import {SharedModule} from '../../shared/shared.module'
import {AboutComponent} from './pages/about/about.component'
import {JumbotronComponent} from './components/jumbotron/jumbotron.component'
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
    imports: [
        SharedModule,
        AboutRoutingModule,
        NgxUsefulSwiperModule 
    ],
    declarations: [
        AboutComponent,
        JumbotronComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AboutModule {
}
