import { Component } from '@angular/core';
import { ApiCarouselService } from "../../service/api/api-carousel/api-carousel.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselItems :any[] = [];
  constructor(private carouselService: ApiCarouselService){}

  ngOnInit(){
    this.carouselService.getCarousel().subscribe(data =>{
      this.carouselItems=data.result;
      console.log(this.carouselItems);
    },
    (error)=>{
      console.log(error);
    })
  }
}
