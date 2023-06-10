import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './data-binding/child/child.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReadNumber } from './pipes/read-number.pipe';
import { BtnDirective } from './directives/btn.directive';
import { OnlyLetterDirective } from './directives/only-letter.directive';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent,
    BtnDirective,

    ReadNumber,
     OnlyLetterDirective,
     MyCurrencyPipe,
     NgTemplateComponent,
     NgContentComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
