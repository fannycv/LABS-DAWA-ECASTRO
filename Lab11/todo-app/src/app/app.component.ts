import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  addTask(taskName: string) {
    const newTask: Task = { name: taskName, completed: false };
    this.tasks.push(newTask);
    this.applyFilter();
  }

  updateFilter(filter: string) {
    if (filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (filter === 'completed') {
      this.filteredTasks = this.tasks.filter((task) => task.completed);
    } else if (filter === 'incomplete') {
      this.filteredTasks = this.tasks.filter((task) => !task.completed);
    }
  }

  private applyFilter() {
    this.updateFilter('all');
  }
}
