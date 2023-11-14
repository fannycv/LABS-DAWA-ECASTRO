import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent {
  @Output() filterSelected = new EventEmitter<string>();

  selectFilter(filter: string) {
    this.filterSelected.emit(filter);
  }
}
