import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightTextDirective } from './highlight-text.directive';
import { CardHighlightDirective } from './card-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightTextDirective,
    CardHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
