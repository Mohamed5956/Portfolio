import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {

  slides: string[];


  constructor() {
    this.slides = [
      'angular_logo',
      'php_logo',
      'typescript',
      'laravel',
      'Node.js'
    ];
  }

  ngOnInit(): void {

  }


}
