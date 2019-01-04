import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]>;
  selectedTask: Task;

  constructor(
    private dialog: MatDialog,
     private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task);
  }


  showDialog(): void {
    this.dialog.open(TaskDialogComponent);
  }
}
