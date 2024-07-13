import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-completed-tab',
  templateUrl: './completed-tab.component.html',
  styleUrl: './completed-tab.component.css'
})
export class CompletedTabComponent implements OnInit {

  navVal: any = {
    search: '',
    filter: 'tag',
    sort: 'tag'
  };

  completedList: any[];
  viewCompletedList: any[]

  constructor(private dataService: DataService) {
    this.completedList = [];
    this.viewCompletedList = this.completedList
  }

  ngOnInit(): void {
    this.completedList = this.dataService.getCompletedList();
  }

  handleTaskDelete(DeleteTaskElementId: any) {
    this.dataService.deleteTask(DeleteTaskElementId)
  }

  handleTaskReopen(taskReopenId: any) {
    this.dataService.reopenTask(taskReopenId)
  }

  getViewList() {
    this.viewCompletedList = this.completedList;
    if(this.navVal.filter!='tag'){
      this.viewCompletedList = this.completedList.filter(task => task.priority === this.navVal.filter);
    }
    if(this.navVal.sort!='tag'){
      this.viewCompletedList=this.dataService.sortBy(this.navVal.sort, this.viewCompletedList)
    }
    if(this.navVal.search!=''){
      this.viewCompletedList = this.viewCompletedList.filter(task => task.title.toLowerCase().includes(this.navVal.search.toLowerCase()));
    }
    return this.viewCompletedList
  }

}
