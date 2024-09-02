import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent {
  @Input() data: any;
  childData: number = 0;

  // Update child data
  updateChildData() {
    this.childData += 1;
  }
}
