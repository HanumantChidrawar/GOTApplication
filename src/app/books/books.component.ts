import { Component, OnInit } from '@angular/core';

//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';

//importing the service
import { GotService } from '../got.service'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public allBooks:any[];
  public defaultValue:string="None";
  public sortOrder:boolean = false;
  public filterName:any ={ name: ''};

  constructor(private myService: GotService) { }

  ngOnInit() {
    this.allBooks = this.myService.myGet(1,1).subscribe(
      data =>{
        this.allBooks=data;
      },
      error =>{
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
      
    );

  }

  public changeOrder(){
    this.sortOrder = !this.sortOrder;
  }

}
