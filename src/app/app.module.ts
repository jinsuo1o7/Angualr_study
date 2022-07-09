import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { TimeDetailComponent } from './section/time-detail/time-detail.component';
import { TimeButtonsComponent } from './section/time-buttons/time-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    TimeDetailComponent,
    TimeButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
