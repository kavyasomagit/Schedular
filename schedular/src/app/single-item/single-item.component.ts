import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'single-item',
  templateUrl: './single-item.component.html',
  styleUrl: './single-item.component.css'
})
export class SingleItemComponent {
  @Input('taskElement') taskElement: any;
  @Input('currentTab') currentTab: any;
  @Output('taskCompleted') taskCompleted = new EventEmitter<any>();
  @Output('taskNotRequire') taskNotRequire = new EventEmitter<any>();
  @Output('taskDelete') taskDelete = new EventEmitter<any>();
  @Output('taskReopen') taskReopen = new EventEmitter<any>();

  showFlag: boolean = false
  dropDownFlag: boolean = false
  isTitleEditable: boolean = false

  onTitleClick = () => {
    this.showFlag=!this.showFlag
  }

  updatePriority = (val:string) => {
    this.taskElement.priority = val
    this.dropDownFlag=!this.dropDownFlag
  }

  onPriorityClick = () => {
    this.dropDownFlag=!this.dropDownFlag
  }

  onClickUpdate = () => {
    if(this.isTitleEditable) {
      this.showFlag=!this.showFlag
    }
    this.isTitleEditable=!this.isTitleEditable;
  }

  onClickComplete = () => {
    this.taskCompleted.emit(this.taskElement.id);
  }

  onClickNotRequire = () => {
    this.taskNotRequire.emit(this.taskElement.id);
  }

  onClickReopen = () => {
    this.taskReopen.emit(this.taskElement.id);
  }

  onClickDelete = () => {
    this.taskDelete.emit(this.taskElement.id);
  }

}
