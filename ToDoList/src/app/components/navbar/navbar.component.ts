import { Component, OnInit } from '@angular/core';
import { TodolistServiceService } from 'src/app/Service/todolist-service.service';
import { ViewlistComponent  } from '../viewlist/viewlist.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private todoService:TodolistServiceService) { }

  ngOnInit(): void {
  }

//   result:any={

//   }

//   getData(){

//     this.todoService.getData().subscribe(

//       (fetch)=>{
//         console.log(fetch);
        
//         this.result = fetch;

//         console.warn(fetch);
        
//       },
//       error=>{
// console.warn("something went wrong");

//       }


//     )
//   }


  

}
