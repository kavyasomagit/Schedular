import { Injectable } from '@angular/core';
import { todoList } from './data/todo-initial'
import { completedList } from './data/completed-initial'
import { cancelledList } from './data/cancelled-initial'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todoList = todoList;
  private completedList = completedList;
  private cancelledList = cancelledList;
  private taskId = 16;

  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  getCompletedList() {
    return this.completedList;
  }

  getCancelledList() {
    return this.cancelledList;
  }

  sortBy(sortKey: string, iplist: any[]): any[] {
    // Clone the todoList array to avoid mutating the original array
    const sortedList = [...iplist];
  
    switch (sortKey) {
      case 'aToz':
        sortedList.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'zToa':
        sortedList.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'lowToHigh':
        sortedList.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = { 'low': 1, 'medium': 2, 'high': 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        break;
      case 'highToLow':
        sortedList.sort((a, b) => {
          const priorityOrder: { [key: string]: number } = { 'low': 1, 'medium': 2, 'high': 3 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        break;
      default:
        console.log('Invalid sort key');
        return [];
    }
  
    return sortedList;
  }

  markComplete(taskId: any) {
    const index = this.todoList.findIndex(task => task.id === taskId);

    if (index !== -1) {
      const completedTask = this.todoList.splice(index, 1)[0]; 
      this.completedList.push(completedTask); 
    } else {
        console.log('Task not found in todoList');
    }
  }

  markNotRequire(taskId: any) {
    const index = this.todoList.findIndex(task => task.id === taskId);

    if (index !== -1) {
      const cancelledTask = this.todoList.splice(index, 1)[0]; 
      this.cancelledList.push(cancelledTask); 
    } else {
        console.log('Task not found in todoList');
    }
  }

  deleteTask(taskId: any) {
    const index = this.completedList.findIndex(task => task.id === taskId);

    if (index !== -1) {
      this.completedList.splice(index, 1)[0];
    } else {
      const index = this.cancelledList.findIndex(task => task.id === taskId);
      this.cancelledList.splice(index, 1)[0];
    }
  }

  reopenTask(taskId: any) {
    const index = this.completedList.findIndex(task => task.id === taskId);

    if (index !== -1) {
      const task = this.completedList.splice(index, 1)[0];
      this.todoList.push(task)
    } else {
      const index = this.cancelledList.findIndex(task => task.id === taskId);
      const task = this.cancelledList.splice(index, 1)[0];
      this.todoList.push(task)
    }
  }

  generateTaskId() {
    this.taskId+=1
    return this.taskId
  }

  addTodoTask(task: any) {
    console.log(task)
    this.todoList.push(task)
  }

}
