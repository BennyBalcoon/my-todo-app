import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-app';
  todoTask = [
    'Repasser mes chaussettes',
  ];

  wipTask = [
    'Passer chez Sosh',
    'fucking angular'
  ];

  doneTask = [
    'Manger des pommes',
    'boire boire boire'
  ];

  addTodo(newTodo) {
    this.todoTask.push(newTodo);
  }

  deleteTodo() {
    this.todoTask.splice(this.todoTask.length-1, 1);
  }
  deleteWip() {
    this.wipTask.splice(this.wipTask.length-1, 1);
  }
  deleteDone() {
    this.doneTask.splice(this.doneTask.length-1, 1);
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

