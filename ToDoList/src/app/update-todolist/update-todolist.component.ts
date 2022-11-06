import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodolistServiceService } from '../Service/todolist-service.service';

@Component({
  selector: 'app-update-todolist',
  templateUrl: './update-todolist.component.html',
  styleUrls: ['./update-todolist.component.css']
})
export class UpdateTodolistComponent implements OnInit {

  id:any = 0;

  constructor(
    private todoService: TodolistServiceService,
    private route:ActivatedRoute,) 
    {
     }


  ngOnInit(): void {



    this.id = this.route.snapshot.params['id'];

    console.warn("snapshot id"+this.id);

    this.todoService.getDataById(this.id).subscribe(
      Response => {
        this.data = Response;
      },
      error => {
        console.warn(error);
      }
    )

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
