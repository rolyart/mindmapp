import {Component, OnInit} from '@angular/core'
import { SwiperOptions } from 'swiper'
import { Router } from '@angular/router';

@Component({
    selector: 'mindmapp-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    isSkiped:boolean = JSON.parse(localStorage.getItem('start'))?JSON.parse(localStorage.getItem('start')).isSkiped:false;
    config: SwiperOptions = {
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
    };
    
   
    img1='./assets/images/mind-maps.png';
    img2='./assets/images/solar-system.png';
    img3='./assets/images/radial-tree.png';
    img4='./assets/images/business-plan.png';

    constructor (private router:Router) {
    }

    public ngOnInit () {
        console.log(this.isSkiped)
        if(this.isSkiped) this.router.navigate(['app'])
    }

    getToApp(){
        localStorage.setItem('start', JSON.stringify({isSkiped:true}));
        this.router.navigate(['app']);
    }

}
