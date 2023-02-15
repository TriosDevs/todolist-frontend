import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  taskStatus: boolean;
  dropdown:boolean;
  changeTaskStatus() {
    this.taskStatus = !this.taskStatus;
  }

  ngAfterViewInit() {

    $('.task-hover-action')
      .mouseenter(()=> {
        
        $('.task-edit-img-wrapper').addClass('visible');
      })
      .mouseleave(()=> {
        if(!this.dropdown){
          $('.task-edit-img-wrapper').removeClass('visible');
        }
        
      });
  }

  openDropdown(){
    this.dropdown = !this.dropdown;
  }


}
