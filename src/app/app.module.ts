import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NavComponent } from './component/nav/nav.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HttpClientModule } from "@angular/common/http";
import { UltimosLanzamientosComponent } from './component/ultimos-lanzamientos/ultimos-lanzamientos.component';
import { ContinuarViendoComponent } from './component/continuar-viendo/continuar-viendo.component';
import { MasVistosComponent } from './component/mas-vistos/mas-vistos.component';






@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    NavComponent,
    CarouselComponent,
    UltimosLanzamientosComponent,
    ContinuarViendoComponent,
    MasVistosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
