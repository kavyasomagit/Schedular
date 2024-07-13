import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-todo-tab',
  templateUrl: './todo-tab.component.html',
  styleUrl: './todo-tab.component.css'
})
export class TodoTabComponent implements OnInit {

  todoList: any[];
  viewTodoList: any[];
  newTaskFlag: boolean = false
  titlePlaceholder: string = 'Enter task title';
  descriptionPlaceholder: string = 'Enter task description';
  navVal: any = {
    search: '',
    filter: 'tag',
    sort: 'tag'
  };

  newTask: any = {
    id: 0,
    title: '',
    description: '',
    priority: 'low' // Default priority
  };

  constructor(private dataService: DataService) {
    this.todoList = [];
    this.viewTodoList = this.todoList;
  }

  ngOnInit(): void {
    this.todoList = this.dataService.getTodoList();
  }

  handleTaskCompleted(completedTaskElementId: any) {
    this.dataService.markComplete(completedTaskElementId)
  }

  handleTaskNotRequire(taskNotRequireId: any) {
    this.dataService.markNotRequire(taskNotRequireId)
  }

  onClickAddTask() {
    this.newTaskFlag = !this.newTaskFlag
    this.resetNewTask()
  }

  onSubmit() {
    this.newTaskFlag = !this.newTaskFlag
    this.newTask.id = this.dataService.generateTaskId()
    this.dataService.addTodoTask(this.newTask)
    this.resetNewTask()
  }

  resetNewTask() {
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      priority: 'low' // Default priority
    };
  }

  handleSearchEvent(searchValue: any) {
    console.log(searchValue,'todo')
  }

  getViewList() {
    this.viewTodoList = this.todoList;
    if(this.navVal.filter!='tag'){
      this.viewTodoList = this.todoList.filter(task => task.priority === this.navVal.filter);
    }
    if(this.navVal.sort!='tag'){
      this.viewTodoList=this.dataService.sortBy(this.navVal.sort, this.viewTodoList)
    }
    if(this.navVal.search!=''){
      this.viewTodoList = this.viewTodoList.filter(task => task.title.toLowerCase().includes(this.navVal.search.toLowerCase()));
    }
    return this.viewTodoList
  }

}
