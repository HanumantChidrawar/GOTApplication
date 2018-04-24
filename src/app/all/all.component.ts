import { Component, OnInit } from '@angular/core';

//importing files for redirecting from one component to other
import { ActivatedRoute, Router } from '@angular/router';

//importing the service
import { GotService } from '../got.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public allData: any[] = [];
  public allBooks:any[]=[];
  public defaultValue: string = "None";
  public sortOrder:boolean = false;
  public filterName:any ={ name: ''};

  constructor(private myService: GotService) { }

  ngOnInit() {

    for (let i = 0; i < 9; i++) { //Fetching all the Houses of Game of Thrones
      let temp = this.myService.myGet(0, i).subscribe(
        data => {
          temp = data;
          this.allData = this.allData.concat(temp);
        },
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      );
    }

    for (let i = 0; i < 44; i++) { //Fetching all the Characters of Game of Thrones
      let temp = this.myService.myGet(2, i).subscribe(
        data => {
          temp = data;
          this.allData = this.allData.concat(temp);
        },
        error => {
          console.log("Some Error Occured");
          console.log(error.errorMessage);
        }
      );
    }

    this.allBooks = this.myService.myGet(1,1).subscribe( //Fetching all the Books of Game of Thrones
      data =>{
        this.allBooks = data;
        this.allData=this.allData.concat(this.allBooks);
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
