import { Component } from '@angular/core';
import { tns } from "tiny-slider";

@Component({
  selector: 'app-ultimos-lanzamientos',
  templateUrl: './ultimos-lanzamientos.component.html',
  styleUrls: ['./ultimos-lanzamientos.component.css']
})
export class UltimosLanzamientosComponent {

  ngOnInit(): void {
    tns({
      container: '.fixedWidth',
    items: 1,
    responsive: {"0": {"items": 1}, "768": {"items": 1}, "992": {"items": 1}, "1200": {"items": 5}},
    fixedWidth: 400,
    swipeAngle: false,
    mouseDrag: true,
    gutter: 16,
    loop: false,
    nav: false,
    controlsText:['<i class="bi fa-solid fa-angle-left" style="color: #ffffff;"></i>','<i class="bi fa-solid fa-angle-right" style="color: #ffffff;"></i>'],
    autoplay: false


    });
  }
  
}
