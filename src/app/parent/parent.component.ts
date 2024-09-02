import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {
  primitiveData: number = 0;
  nonPrimitiveData: any = { value: 0 };
  data = { primitiveData: this.primitiveData, nonPrimitiveData: this.nonPrimitiveData };

  constructor(private myService: MyService) {}

  // Update primitive data
  updatePrimitiveData() {
    this.primitiveData += 1;
  }

  // Update non-primitive data
  updateNonPrimitiveData() {
    this.nonPrimitiveData = { ...this.nonPrimitiveData, value: this.nonPrimitiveData.value + 1 };
  }
}
