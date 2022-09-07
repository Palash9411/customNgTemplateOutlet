import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { customNgTemplateOutletDirective } from './directives/custonNgTemplate.directive';

@NgModule({
  declarations: [
    AppComponent,
    customNgTemplateOutletDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
