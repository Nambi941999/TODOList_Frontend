import { Component, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';
import { TodolistServiceService } from '../Service/todolist-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todoService: TodolistServiceService) {

   
  }

  ngOnInit(): void {

  }

  data: any = {

  }


  status = false;

  onSubmit() {

    console.log(this.data);

    this.todoService.sentData(this.data).subscribe(
      (success: any) => {
        console.warn('success' + success)
        this.status = true;
        console.warn(this.status);

      },
      error => {
        console.warn('error');

      }


    )


  }

  //remove success
  close() {
    console.warn("close");
    this.status = false;
  }



}
