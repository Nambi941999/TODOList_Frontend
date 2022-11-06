import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodolistServiceService } from 'src/app/Service/todolist-service.service';



@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {


  constructor(private todoService:TodolistServiceService,private route:Router) { }

  result:any=[{

  }]

  


  ngOnInit(): void {

  this.todoService.getData().subscribe(
    responsedata => {
      this.result = responsedata;
      console.warn(this.result);
    },
    error =>{
      console.warn(error);
    }
  );

   
  }


/*
  result:any={

  }

  getData(){

    this.todoService.getData().subscribe(

      (fetch)=>{
        console.log(fetch);
        
        this.result = fetch;

        console.warn(fetch);
        
      },
      error=>{
console.warn("something went wrong");

      }


    )
  }

  */

  // This is for delete

  delete(id:number){

    console.warn("id:"+id);

    this.todoService.getDeleteById(id).subscribe(

      response => {
        console.warn(response)
        location.reload();
      },
      error => {
        console.warn(error);
      }

    )

  }

  //get data by id


  databyid:any=[{

  }]

  getById(id:number){

    this.todoService.getDataById(id).subscribe(
      response => {
        console.warn('response::'+response);
        this.databyid = response;
        console.warn(this.databyid);
      },
      error => {
        console.warn('error::'+error);
      }

    )


  }

  //update by id

  update(id:Number){
    console.warn("id::"+id)
    this.route.navigate(['updatetodolist',id]);


  }

 
  

}


