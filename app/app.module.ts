import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }          from './app.component';
import { carComponents, carServices } from './car.components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    carServices
 ],
  declarations: [
    AppComponent,
    carComponents
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }