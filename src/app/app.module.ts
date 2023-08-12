import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { Car } from './services/car.service';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { LoggerService } from './services/logger.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent],
})
export class AppModule {}
