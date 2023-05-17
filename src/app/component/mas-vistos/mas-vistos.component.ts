import { Component } from '@angular/core';
import { tns } from "tiny-slider";


@Component({
  selector: 'app-mas-vistos',
  templateUrl: './mas-vistos.component.html',
  styleUrls: ['./mas-vistos.component.css']
})
export class MasVistosComponent {
  ngOnInit(): void {
    tns({
      container: '.masvisto',
      items: 1,
      responsive: {"0": {"items": 2}, "768": {"items": 3}, "992": {"items": 4}, "1200": {"items": 5}},
      fixedWidth: 235,
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

