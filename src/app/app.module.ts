import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
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
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
