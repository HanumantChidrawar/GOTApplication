import { Component, OnInit } from '@angular/core';
//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';
import { GotService } from '../got.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public singleBook:any;
  public defaultValue:string="None";

  constructor(private _route:ActivatedRoute,private router:Router, private myservice:GotService, private location: Location) { }

  ngOnInit() {
    let bookId= this._route.snapshot.paramMap.get('bookId');
    this.singleBook = this.myservice.getSingle(1,bookId).subscribe(
      data =>{
        this.singleBook=data;
      },
      error =>{
        console.log("Some Error Occured");
        console.log(error.errorMessage);
      }
    );
  }

   //goBack Method
   public goBack():any{
    this.location.back();
  }

}
