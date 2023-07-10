import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation.component';
import { AnimationRoutingModule } from './animation-routing.module';

@NgModule({
  declarations: [AnimationComponent],
  imports: [CommonModule, AnimationRoutingModule],
})
export class AnimationModule {}
