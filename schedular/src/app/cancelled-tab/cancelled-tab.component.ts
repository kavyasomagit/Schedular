import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-cancelled-tab',
  templateUrl: './cancelled-tab.component.html',
  styleUrl: './cancelled-tab.component.css'
})
export class CancelledTabComponent implements OnInit{

  navVal: any = {
    search: '',
    filter: 'tag',
    sort: 'tag'
  };

  cancelledList: any[];
  viewCancelledList: any[];

  constructor(private dataService: DataService) {
    this.cancelledList = [];
    this.viewCancelledList = this.cancelledList
  }

  ngOnInit(): void {
    this.cancelledList = this.dataService.getCancelledList();
  }

  handleTaskDelete(DeleteTaskElementId: any) {
    this.dataService.deleteTask(DeleteTaskElementId)
  }

  handleTaskReopen(taskReopenId: any) {
    this.dataService.reopenTask(taskReopenId)
  }

  getViewList() {
    this.viewCancelledList = this.cancelledList;
    if(this.navVal.filter!='tag'){
      this.viewCancelledList = this.cancelledList.filter(task => task.priority === this.navVal.filter);
    }
    if(this.navVal.sort!='tag'){
      this.viewCancelledList=this.dataService.sortBy(this.navVal.sort, this.viewCancelledList)
    }
    if(this.navVal.search!=''){
      this.viewCancelledList = this.viewCancelledList.filter(task => task.title.toLowerCase().includes(this.navVal.search.toLowerCase()));
    }
    return this.viewCancelledList
  }

}
