import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgContentComponent {

}
